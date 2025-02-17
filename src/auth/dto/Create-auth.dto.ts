import {IsEmail, IsNotEmpty, IsString, Length, Matches} from "class-validator";

export class CreateAuthDto {
  constructor(
    email: string,
    username: string,
    password: string,
  ) {
    this.email = email;
    this.username = username;
    this.password = password; 
  }

  @IsEmail()
  email : string

  @IsString()
  @IsNotEmpty({message : "El nombre de usuario es un campo requerido"})
  @Matches(/^\S+$/, {message : "No usar espacios para el nombre de usuario"})
  username : string;
  
  @Length(8, 20, {message : "La contraseña debe ser entre 8 a 20 caracteres de longitud"})
  password : string;
}
