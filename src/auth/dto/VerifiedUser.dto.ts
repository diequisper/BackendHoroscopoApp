import { IsString } from "class-validator";

export class VerifiedUserDto{
  @IsString()
  token : string;

  @IsString()
  username : string;
}