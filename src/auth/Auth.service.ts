import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/Create-auth.dto';
import { LoginAuthDto } from './dto/Login-auth.dto';
import { FirebaseService } from 'src/firebase/Firebase.service';
import { VerifiedUserDto } from './dto/VerifiedUser.dto';
import * as admin from 'firebase-admin'

@Injectable()
export class AuthService {

  constructor(private readonly firebaseService : FirebaseService){}
  

  create(createAuthDto: CreateAuthDto, name : string, birthDate : Date, 
    country : string, timeBirth ?: Date, city ?: string) {
    return this.firebaseService.create(createAuthDto, name, birthDate, country, timeBirth, city);
  }

  async verify(verifiedUser : VerifiedUserDto){
    const token = await this.firebaseService.verify(verifiedUser.token)
    if(!token){
      throw new UnauthorizedException("Su autenticación expiró")
    }
    const userSnapshot = await admin.firestore()
    .collection("users")
    .where("username", "==", verifiedUser.username)
    .get();
    if(userSnapshot.empty){
      throw new UnauthorizedException("El usuario no existe o los datos son incorrectos")
    }
    return userSnapshot.docs[0].data();
  }

  login(username : string){
    return this.firebaseService.login(username);
  }
}
