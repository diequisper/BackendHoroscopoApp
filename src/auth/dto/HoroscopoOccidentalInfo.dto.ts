import { IsNotEmpty, IsOptional, IsString, IsArray } from "class-validator";

export class HoroscopoOccidentalInfoDto {

  @IsString()
  @IsNotEmpty({ message: "El signo es un campo requerido" })
  signo: string;

  @IsString()
  fechas: string;

  @IsString()
  elemento: string;

  @IsString()
  modalidad: string;

  @IsString()
  @IsOptional()
  planetaRegente?: string;

  @IsString()
  descripcion: string;

  @IsArray()
  @IsString({ each: true })
  rasgos: string[];

  @IsArray()
  @IsString({ each: true })
  signosCompatibles: string[];
}
