import { IsNotEmpty, IsOptional, IsString, IsArray } from "class-validator";

export class HoroscopoChinoInfoDto {

  @IsString()
  @IsNotEmpty({ message: "El signo chino es requerido" })
  signoChino: string;

  @IsString()
  elemento: string;

  @IsString()
  polaridad: string;

  @IsString()
  troncoCelestial: string;

  @IsString()
  ramaTerrestre: string;

  @IsString()
  @IsOptional()
  baziExplicacion?: string;

  @IsString()
  descripcion: string;

  @IsArray()
  @IsString({ each: true })
  signosCompatibles: string[];
}
