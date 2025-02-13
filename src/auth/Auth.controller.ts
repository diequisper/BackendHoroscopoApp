import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './Auth.service';
import { LoginAuthDto } from './dto/Login-auth.dto';
import { BackendUser } from './dto/BackendUser.dto';
import { GeminiService } from './Auth.gemini.service'; 

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly geminiService: GeminiService, 
  ) {}

  @Post('registrar')
  create(@Body() createAuthDto: BackendUser) {
    const data = this.authService.create(createAuthDto);
    console.log("Usuario creado ");
    return data;
  }

  @Post('login')
  login(@Body() loginAuthDto: LoginAuthDto) {
    return this.authService.login(loginAuthDto);
  }

  @Post('gemini')
  async askGemini(@Body('prompt') prompt: string) {
    const response = await this.geminiService.generateResponse(prompt);
    return { response };
  }
}
