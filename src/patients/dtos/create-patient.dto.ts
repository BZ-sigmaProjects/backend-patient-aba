import { IsString,  IsNotEmpty, IsDate, IsBoolean, IsEmail, IsPhoneNumber, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreatePatientDto {
  @IsString()
  @IsNotEmpty()
  cin: string;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  gender: string;

  @IsDate()
  @IsNotEmpty()
  dateOfBirth: Date;

  @IsString()
  @IsNotEmpty()
  insuranceCompany: string; // preferable to have a table where we have all the diffrent companies and register here the Id of the company
 
  @IsNotEmpty()
  numAderent: number | null;

  @IsString()
  @IsNotEmpty()
  province: string;
  
  @IsString()
  @IsNotEmpty()
  city: string;
  
  @IsPhoneNumber()
  @IsNotEmpty()
  mobilePhone: string;

  @IsString()
  @IsNotEmpty()
  address: string;
  
  @IsString()
  addressCompliment: string;
}

