import { Module } from '@nestjs/common';
import { AuthService } from './Auth.service';
import { AuthController } from './Auth.controller';
import { FirebaseModule } from 'src/firebase/Firebase.module';

import { GeminiService } from './Auth.gemini.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, GeminiService],
})

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports : [FirebaseModule]
})
export class AuthModule {}
