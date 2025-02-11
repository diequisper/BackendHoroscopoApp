import { Module } from '@nestjs/common';
import { AuthService } from './Auth.service';
import { AuthController } from './Auth.controller';
import { FirebaseModule } from 'src/firebase/Firebase.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports : [FirebaseModule]
})
export class AuthModule {}
