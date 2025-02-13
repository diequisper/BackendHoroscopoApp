import { IsDate, IsNotEmpty, IsOptional, IsString, IsArray } from "class-validator";
import { Transform } from "class-transformer";

export class HoroscopoVedicoHoyDto {

  @IsString()
  @IsNotEmpty({ message: "El Rashi Lunar es requerido" })
  rashiLunar: string;

  @IsString()
  nakshatra: string;

  @IsString()
  ascendente: string;

  @Transform(({ value }) => new Date(value))
  @IsDate({ message: "El input no es de tipo fecha" })
  fecha: Date;

  @IsString()
  @IsNotEmpty({ message: "La predicción es requerida" })
  prediccion: string;

  @IsString()
  @IsOptional()
  planetaInfluyente?: string;

  @IsString()
  @IsOptional()
  casaPlanetaria?: string;

  @IsString()
  @IsOptional()
  dosha?: string;

  @IsString()
  @IsOptional()
  karmaDharma?: string;

  @IsString()
  @IsOptional()
  mahadasha?: string;

  @IsArray()
  @IsString({ each: true })
  compatibilidad: string[];
}
