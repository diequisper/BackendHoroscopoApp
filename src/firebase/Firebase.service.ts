import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateAuthDto } from 'src/auth/dto/Create-auth.dto';
import * as admin from 'firebase-admin'
import { BackendUser } from 'src/auth/dto/BackendUser.dto';
import { LoginAuthDto } from 'src/auth/dto/Login-auth.dto';
/* import { firebaseAuth, firestore } from './firebase.config'; */

@Injectable()
export class FirebaseService {

  private userCollection = admin.firestore().collection("users");

  async create(createAuthDto : BackendUser) {
    try {
      const user = await admin.auth().createUser({
        email : createAuthDto.email,
        password : createAuthDto.password,
        displayName : createAuthDto.username
      });

      const userId = user.uid;
      await this.userCollection.doc(userId).set({
        id: userId,
        name: createAuthDto.name,
        birthDate: createAuthDto.birthDate,
        timeBirth: createAuthDto.timeBirth,
        country: createAuthDto.country,
        city: createAuthDto.city,
        createdAt: new Date(),
      })

      return { message: 'Usuario registrado correctamente', uid: userId };
    } catch (error) {
      this.handleErrors(error)
    }
  }

  async login() {

    return 'This action adds a new firebase'
  }

  private handleErrors(error : any){
    if(error.code  === "auth/email-already-exists"){
      throw new BadRequestException(error.errorInfo.message)
    }
    console.log(error.errorInfo.message)
    throw new InternalServerErrorException("Internal Error")
  }

}
