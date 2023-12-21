
export class Patient {
    id: string;
    cin: string; // cin is unique as well, but it's preferable to use id as unique value, in case we want to update cin
    firstName: string;
    lastName: string;
    gender: string;
    dateOfBirth: Date | string;
    isAdherent: boolean ;
    email: string | null;
    mobilePhone: string;
    landlinePhone: string | null;
    insuranceCompany: string; // preferable to have a table where we have all the diffrent companies and register here the Id of the company
    numAderent: number;
    country: string;
    province: string;
    city: string;
    zipCode: number | null;
    address: string;
    addressCompliment: string | null;
    createdOn: Date;
    modifiedOn: Date | null;
  } 
  
  
  