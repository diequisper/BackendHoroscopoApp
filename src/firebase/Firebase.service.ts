import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateAuthDto } from 'src/auth/dto/Create-auth.dto';
import * as admin from 'firebase-admin'
import { BackendUser } from 'src/auth/dto/BackendUser.dto';
/* import { firebaseAuth, firestore } from './firebase.config'; */

@Injectable()
export class FirebaseService {

  private userCollection = admin.firestore().collection("users");

  async create(createAuthDto : CreateAuthDto, name : string, birthDate : Date, 
    country : string, timeBirth ?: Date, city ?: string) {
    try {
      const user = await admin.auth().createUser({
        email : createAuthDto.email,
        password : createAuthDto.password,
        displayName : createAuthDto.username
      });

      const userId = user.uid;
      const backUser = new BackendUser(userId, name, birthDate, country, createAuthDto.email,
        createAuthDto.username, createAuthDto.password, city, timeBirth)
      await this.userCollection.doc(userId).create(backUser.toPlainObject())

      return { message: 'Usuario registrado correctamente', uid: userId };
    } catch (error) {
      this.handleErrors(error)
    }
  }

  async verify(token: string) {
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    return decodedToken;
  } catch (error) {
    console.error("Error verificacion de token:", error);
    throw new Error("Failed to verify token");
  }
}

  async login(username : string) : Promise<string | undefined> {
    try {
      const thisEmail = await admin.firestore().collection("users").where("username", "==", username.trim()).get();
      if (thisEmail.empty) {
        this.handleErrors(new Error("Usuario no encontrado"));
        return undefined;
      }
      return thisEmail.docs[0].data().email
    } catch (error) {
      this.handleErrors(error)
      return undefined
    }
  }

  private handleErrors(error: any) {
    const errorInfo = error?.errorInfo;
    const errorMessage = errorInfo?.message || error?.message || 'Unknown error occurred';
    const errorCode = errorInfo?.code || error?.code || 'UNKNOWN_CODE';
  
    console.error(`Firebase Error - Code: ${errorCode}, Message: ${errorMessage}`);
  
    if (errorCode === 'auth/email-already-exists') {
      throw new BadRequestException(errorMessage);
    }
  
    throw new InternalServerErrorException('Internal Error');
  }

}
