import { IsNotEmpty, IsOptional, IsString, IsArray } from "class-validator";

export class HoroscopoVedicoInfoDto {

  @IsString()
  @IsNotEmpty({ message: "El Rashi Lunar es requerido" })
  rashiLunar: string;

  @IsString()
  nakshatra: string;

  @IsString()
  ascendente: string;

  @IsString()
  planetaRegente: string;

  @IsString()
  simbolismo: string;

  @IsString()
  dosha: string;

  @IsString()
  descripcion: string;

  @IsArray()
  @IsString({ each: true })
  compatibilidadNakshatra: string[];
}
