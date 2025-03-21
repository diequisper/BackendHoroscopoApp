import { IsDate, IsEmail, IsNotEmpty, IsOptional, IsString, Length, Matches, MaxDate} from "class-validator";

export class BackendUser{
  constructor(
    id: string,
    name: string,
    birthDate: Date,
    country: string,
    email: string,
    username: string,
    password: string,
    city ?: string,
    timeBirth ?: Date,
  ) {
    this.id = id;
    this.name = name;
    this.birthDate = birthDate;
    this.country = country;
    this.email = email;
    this.username = username;
    this.password = password;
    this.city = city;
    this.timeBirth = timeBirth;
  }

  toPlainObject() {
    return {
      id: this.id,
      name: this.name,
      birthDate: this.birthDate,
      country: this.country,
      email: this.email,
      username: this.username,
      password: this.password,
      city: this.city,
      timeBirth: this.timeBirth,
    };
  }

  @IsString()
  id : string

  @IsString()
  @IsNotEmpty({message : "El nombre es un campo requerido"})
  @Matches(/^[a-zA-Z ]+$/, {message : "No usar números o caracteres especiales para el nombre"})
  name : string;

  @IsDate({message : "El input no es de tipo fecha"})
  @MaxDate(new Date(), {message : "No usar fechas próximas"})
  birthDate : Date;

  @IsOptional()
  timeBirth ?: Date;

  @IsString()
  country : string;

  @IsOptional()
  @IsString()
  city ?: string;

  @IsEmail()
  email : string

  @IsString()
  @IsNotEmpty({message : "El nombre de usuario es un campo requerido"})
  @Matches(/^\S+$/, {message : "No usar espacios para el nombre de usuario"})
  username : string;
  
  @Length(8, 20, {message : "La contraseña debe ser entre 8 a 20 caracteres de longitud"})
  password : string;
}