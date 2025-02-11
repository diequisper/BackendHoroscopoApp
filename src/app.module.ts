import { Module } from '@nestjs/common';
import { AuthModule } from './auth/Auth.module';
import { FirebaseModule } from './firebase/Firebase.module';

@Module({
  imports: [FirebaseModule, AuthModule]
})
export class AppModule {}
