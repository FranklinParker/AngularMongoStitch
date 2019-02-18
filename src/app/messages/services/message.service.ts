import {Injectable} from '@angular/core';
import {Stitch, RemoteMongoClient} from 'mongodb-stitch-browser-sdk';
import {Message} from '../models/message';
import {BehaviorSubject, Observable} from 'rxjs';
import {BSON} from 'mongodb-stitch-browser-sdk';
import {SaveResponse} from '../../core/models/saveResponse';
import {HttpStatusCodes} from '../../core/models/httpstatuses';


const blankMessage: Message = {
  message: undefined,
  creator: undefined

};

@Injectable({
  providedIn: 'root'
})


export class MessageService {
  private mongoDb: any;
  private messageSelected: BehaviorSubject<Message> = new BehaviorSubject<Message>(blankMessage);
  private messageDeleted: BehaviorSubject<string> = new BehaviorSubject<string>(null);


  constructor() {
    this.mongoDb = Stitch.defaultAppClient.getServiceClient(
      RemoteMongoClient.factory,
      'mongodb-atlas'
    );
  }

  /**
   * Delete message
   *
   */
  public deleteMessage(id: string) {

    const result = this.mongoDb.db('chat')
      .collection('messages').deleteOne({_id: new BSON.ObjectId(id)})
      .then((res: { deletedCount: number }) => {
        this.messageDeleted.next(id);
      })
      .catch(err => {
        alert('Delete Failed');
      });

  }


  public getSelectedMessageAsObservable(): Observable<Message> {
    return this.messageSelected.asObservable();
  }

  public setMessageSelected(message: Message) {
    this.messageSelected.next(message);
  }

  public getMessageDeleteAsObservable(): Observable<string> {
    return this.messageDeleted.asObservable();
  }

  /**
   * get all messages
   *
   */
  public async getMessages(): Promise<Message[]> {
    try {
      const messages = await this.mongoDb.db('chat')
        .collection('messages').find().asArray();
      const transformedMessages = [];
      messages.forEach(message => {
        const transformedMessage = {
          id: message._id.toString(),
          message: message.message,
          creator: message.creator,
          version: message.version
        };

        transformedMessages.push(transformedMessage);
      });
      return transformedMessages;
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * save new message
   *
   *
   * @param message message
   */
  public async createNewMessage(message: Message) {
    try {
      const messageToSave =
        Object.assign({}, {
          message: message.message,
          creator: message.creator,
          version: 0
        });
      const saved = await this.mongoDb.db('chat')
        .collection('messages').insertOne(messageToSave);
      return {
        id: saved.insertedId.toString(),
        message: message.message,
        creator: message.creator,
        version: 0
      };
    } catch (err) {
      console.log(err);
    }
  }

  public async updateMessage(message: Message): Promise<SaveResponse> {
    try {
      const existMessage = await this.mongoDb.db('chat')
        .collection('messages')
        .find({_id: new BSON.ObjectId(message.id)})
        .toArray();
      console.log('found ', existMessage)
      if (!existMessage || existMessage.length === 0) {
        return {
          success: false,
          error: {
            title: 'Record Update failed',
            error: {
              code: HttpStatusCodes.HTTP_STATUS_NOT_FOUND_404,
              message: 'cannot update record not found'
            }
          }
        };
      }
      if (existMessage[0]['version'] !== message.version) {
        return {
          success: false,
          error: {
            title: 'Record Update failed',
            error: {
              code: HttpStatusCodes.HTTP_STATUS_STALE_DATA_412,
              message: 'Version mismatch'
            }
          }
        };
      }

      await this.mongoDb.db('chat')
        .collection('messages')
        .updateOne({_id: new BSON.ObjectId(message.id)},
          {
            message: message.message,
            creator: message.creator,
            version: message.version + 1
          });
      return {
        success: true
      };

    } catch (e) {
      console.log('error updating', e);
      return {
        success: false,
        error: {
          title: 'Record Update failed',
          error: {
            code: 500,
            message: e.message
          }
        }
      };
    }
  }


}
