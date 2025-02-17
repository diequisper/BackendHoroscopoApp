import { Controller, Post, Body, Param } from '@nestjs/common';
import { AuthService } from './Auth.service';
import { GeminiService } from './Auth.gemini.service'; 
import { CreateAuthDto } from './dto/Create-auth.dto';
import { VerifiedUserDto } from './dto/VerifiedUser.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly geminiService: GeminiService, 
  ) {}

  @Post('registrar')
  create(@Body() user: { createAuthDto: CreateAuthDto; name: string; birthDate: Date;
    country: string; timeBirth?: Date; city?: string }) {
    const { createAuthDto, name, birthDate, country, timeBirth, city } = user;

    const data = this.authService.create(createAuthDto, name, birthDate, country, timeBirth, city);

    console.log("Usuario creado");
    return data;
  }

  @Post('verifyAuth')
  verifyAuth(@Body() verifiedUser: VerifiedUserDto) {
    return this.authService.verify(verifiedUser);
  }

  @Post('login')
  async login(@Body('username') username: string) {
    const email = await this.authService.login(username);
    return { email };
  }

  @Post('askGemini')
  async askGemini(@Body('prompt') prompt: string) {
    const response = await this.geminiService.generateResponse(prompt);
    return { response };
  }
}
