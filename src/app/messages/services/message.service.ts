import {Injectable} from '@angular/core';
import {Stitch, RemoteMongoClient} from 'mongodb-stitch-browser-sdk';
import {Message} from '../models/message';
import {connectableObservableDescriptor} from 'rxjs/internal/observable/ConnectableObservable';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  mongoDb: any;

  constructor() {
    this.mongoDb = Stitch.defaultAppClient.getServiceClient(
      RemoteMongoClient.factory,
      'mongodb-atlas'
    );
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

      return messages;
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
