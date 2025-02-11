import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './Auth.service';
import { CreateAuthDto } from './dto/Create-auth.dto';
import { LoginAuthDto } from './dto/Login-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('registrar')
  create(@Body() createAuthDto: CreateAuthDto) {
    const data = this.authService.create(createAuthDto);
    console.log("Usuario creado ", data);
    return data
  }

  @Post('login')
  login(@Body() loginAuthDto : LoginAuthDto){
    return this.authService.login(loginAuthDto)
  }

}
