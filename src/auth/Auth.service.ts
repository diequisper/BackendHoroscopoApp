import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/Create-auth.dto';
import { LoginAuthDto } from './dto/Login-auth.dto';
import { FirebaseService } from 'src/firebase/Firebase.service';
import { BackendUser } from './dto/BackendUser.dto';

@Injectable()
export class AuthService {

  constructor(private readonly firebaseService : FirebaseService){}
  

  create(createAuthDto: BackendUser) {
    return this.firebaseService.create(createAuthDto);
  }

  login(loginDto : LoginAuthDto){
    return this.firebaseService.login();
  }
}
