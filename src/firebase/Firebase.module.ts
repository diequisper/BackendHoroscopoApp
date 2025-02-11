import { Module } from '@nestjs/common';
import { FirebaseService } from './Firebase.service';
import * as admin from 'firebase-admin'

@Module({
  providers: [FirebaseService],
  exports : [FirebaseService]
})

export class FirebaseModule {
  constructor(){
    const serviceAccount = require("../../../horoscopoapp-1eaa3-firebase-adminsdk-fbsvc-b052ed5c51.json");
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
  }
}
