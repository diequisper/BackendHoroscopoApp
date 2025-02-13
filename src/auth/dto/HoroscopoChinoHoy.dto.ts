import { IsDate, IsNotEmpty, IsOptional, IsString, IsNumber, IsArray } from "class-validator";
import { Transform } from "class-transformer";

export class HoroscopoChinoHoyDto {

  @IsString()
  @IsNotEmpty({ message: "El signo chino es requerido" })
  signoChino: string;

  @IsString()
  elementoAnual: string;

  @Transform(({ value }) => new Date(value))
  @IsDate({ message: "El input no es de tipo fecha" })
  fecha: Date;

  @IsString()
  @IsNotEmpty({ message: "La predicción es requerida" })
  prediccion: string;

  @IsString()
  troncoCelestial: string;

  @IsString()
  ramaTerrestre: string;

  @IsString()
  bazi: string;

  @IsString()
  energiaYinYang: string;

  @IsArray()
  @IsString({ each: true })
  compatibilidad: string[];

  @IsNumber()
  numeroSuerte: number;

  @IsString()
  colorSuerte: string;
}
