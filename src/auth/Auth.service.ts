import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/Create-auth.dto';
import { LoginAuthDto } from './dto/Login-auth.dto';
import { FirebaseService } from 'src/firebase/Firebase.service';

@Injectable()
export class AuthService {

  constructor(private readonly firebaseService : FirebaseService){}

  create(createAuthDto: CreateAuthDto) {
    return this.firebaseService.create(createAuthDto);
  }

  login(createLoginDto : LoginAuthDto){
    return "this'll log the user in"
  }
}
