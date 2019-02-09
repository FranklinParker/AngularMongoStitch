import {Injectable} from '@angular/core';

import {
  Stitch,
  StitchAppClient,
  AnonymousCredential,
  RemoteMongoClient
} from 'mongodb-stitch-browser-sdk';


@Injectable({
  providedIn: 'root'
})
export class StitchService {
  client: StitchAppClient;

  constructor() {
    this.initialize();
  }

  test() {
    const mongodb = Stitch.defaultAppClient.getServiceClient(
      RemoteMongoClient.factory,
      'mongodb-atlas'
    );
    mongodb
      .db('node-angular')
      .collection('posts')
      .find()
      .asArray()
      .then(posts => {
        console.log(posts);
      });
    mongodb
      .db('node-angular')
      .collection('users')
      .find()
      .asArray()
      .then(users => {
        console.log(users);
      });
  }

  private initialize() {
    this.client = Stitch.initializeDefaultAppClient('');
    this.client.auth.loginWithCredential(new AnonymousCredential())
      .then(user => {
        console.log('logged in');
      })
      .catch(err => console.log('stitch err', err));

  }
}
