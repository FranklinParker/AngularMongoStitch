import {Injectable} from '@angular/core';
import {Stitch, RemoteMongoClient} from 'mongodb-stitch-browser-sdk';
import {Message} from '../models/message';

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

  async getMessages(): Promise<Message[]> {
    try {
      const messages = await this.mongoDb.db('chat')
        .collection('messages').find().asArray();
      const transformedMessages = [];
      messages.forEach(message => {
        const transformedMessage = {
          id: message._id.toString(),
          message: message.message,
          creator: message.creator
        }
        transformedMessages.push(transformedMessage);
      });

      console.log('messages', transformedMessages);
      return messages;
    } catch (err) {
      console.log(err);
    }
  }
}