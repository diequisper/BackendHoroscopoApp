import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateAuthDto } from 'src/auth/dto/Create-auth.dto';
import * as admin from 'firebase-admin'

@Injectable()
export class FirebaseService {
  async create(createAuthDto : CreateAuthDto) {
    try {
      const userRecord = await admin.auth().createUser({
        email : createAuthDto.email,
        password : createAuthDto.password,
        displayName : createAuthDto.username
      })
      console.log("Usuario Creado", userRecord)
      return userRecord
    } catch (error) {
      this.handleErrors(error)
    }
  }

  login() {
    return 'This action adds a new firebase';
  }

  private handleErrors(error : any){
    if(error.code  === "auth/email-already-exists"){
      throw new BadRequestException(error.errorInfo.message)
    }
    console.log(error.errorInfo.message)
    throw new InternalServerErrorException("Internal Error")
  }

}
