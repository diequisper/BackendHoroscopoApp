import { Module } from '@nestjs/common';
import { AuthModule } from './auth/Auth.module';
import { FirebaseModule } from './firebase/Firebase.module';

@Module({
  imports: [AuthModule, FirebaseModule]
})
export class AppModule {}
