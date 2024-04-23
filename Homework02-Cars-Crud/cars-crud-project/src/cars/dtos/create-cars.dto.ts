import { IsNumber, IsString, Length, Min } from "class-validator";

export class CreateCarsDto {
  @IsString()
  make: string;

  @IsString()
  model: string;

  @IsNumber()
  year: number;
}