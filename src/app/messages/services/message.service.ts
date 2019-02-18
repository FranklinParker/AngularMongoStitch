import {Injectable} from '@angular/core';
import {Stitch, RemoteMongoClient} from 'mongodb-stitch-browser-sdk';
import {Message} from '../models/message';
import {BehaviorSubject, Observable} from 'rxjs';

const blankMessage: Message = {
  message: undefined,
  creator: undefined

};

@Injectable({
  providedIn: 'root'
})


export class MessageService {
  mongoDb: any;
  private messageSelected: BehaviorSubject<Message> = new BehaviorSubject<Message>(blankMessage);

  constructor() {
    this.mongoDb = Stitch.defaultAppClient.getServiceClient(
      RemoteMongoClient.factory,
      'mongodb-atlas'
    );
  }

  public getSelectedMessageAsObservable(): Observable<Message> {
    return this.messageSelected.asObservable();
  }

  public setMessageSelected(message: Message) {
    this.messageSelected.next(message);
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


}
