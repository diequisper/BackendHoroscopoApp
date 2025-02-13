import { IsDate, IsNotEmpty, IsOptional, IsString, IsArray, Matches } from "class-validator";
import { Transform } from "class-transformer";

export class HoroscopoOccidentalHoyDto {
  
  @IsString()
  @IsNotEmpty({ message: "El signo es un campo requerido" })
  signo: string;

  @Transform(({ value }) => new Date(value))
  @IsDate({ message: "El input no es de tipo fecha" })
  fecha: Date;

  @IsString()
  @IsNotEmpty({ message: "La predicción es requerida" })
  prediccion: string;

  @IsString()
  signoSolar: string;

  @IsString()
  signoLunar: string;

  @IsString()
  ascendente: string;

  @IsString()
  @IsOptional()
  planetaDominante?: string;

  @IsString()
  @IsOptional()
  casaSolar?: string;

  @IsString()
  @IsOptional()
  casaLunar?: string;

  @IsString()
  elemento: string;

  @IsString()
  modalidad: string;

  @IsArray()
  @IsString({ each: true })
  compatibilidad: string[];
}
