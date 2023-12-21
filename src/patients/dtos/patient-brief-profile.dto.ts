import { IsString,  IsNotEmpty, IsDate, IsBoolean, IsEmail, IsPhoneNumber, IsNumber } from 'class-validator';

export class PatientBriefProfileDto {
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
  
    @IsNotEmpty()
    dateOfBirth: Date | string;

    @IsString()
    @IsNotEmpty()
    insuranceCompany: string; // preferable to have a table where we have all the diffrent companies and register here the Id of the company
    
    @IsBoolean()
    @IsNotEmpty()
    isAdherent: boolean;
  }