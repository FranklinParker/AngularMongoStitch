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

  private initialize() {
    this.client = Stitch.initializeDefaultAppClient('remove-id');
    this.client.auth.loginWithCredential(new AnonymousCredential())
      .then(user => {
        console.log('logged in');
      })
      .catch(err => console.log('stitch err', err));

  }
}
