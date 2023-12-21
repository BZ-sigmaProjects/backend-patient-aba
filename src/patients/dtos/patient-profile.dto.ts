import { IsString,  IsNotEmpty, IsDate, IsBoolean, IsEmail, IsPhoneNumber, IsNumber } from 'class-validator';

export class PatientProfileDto {
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
   
    @IsNumber()
    @IsNotEmpty()
    numAderent: number;

    @IsBoolean()
    @IsNotEmpty()
    isAdherent: boolean;
    
    @IsString()
    @IsNotEmpty()
    country: string;

    @IsString()
    @IsNotEmpty()
    province: string;

    @IsString()
    @IsNotEmpty()
    city: string;
    
    @IsString()
    @IsNotEmpty()
    address: string;
    
    @IsString()
    addressCompliment: string;

    @IsNumber()
    zipCode: number;

    @IsPhoneNumber()
    @IsNotEmpty()
    mobilePhone: string;

    @IsPhoneNumber()
    landlinePhone: string;


    @IsEmail()
    email: string;

    ////////////////
  }