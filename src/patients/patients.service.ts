import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreatePatientDto, PatientProfileDto, PatientBriefProfileDto } from './dtos';
import { Patient } from './entities/patient.entity'
import { memoizationPatients } from '../static_data/memoizationPatients';

@Injectable()
export class PatientsService {
  private patients: Patient[] = memoizationPatients().getPatient(); 

  create(createPatientDto: CreatePatientDto) {
    const patientExist = this.patients.findIndex(p => p.cin === createPatientDto.cin);
    if(patientExist !== -1)  throw new BadRequestException('userExist');


    const patientId = Math.random().toString() + new Date().toDateString();
    const newPatient : Patient = {
      id: patientId, 
      isAdherent: false,
      email: null, 
      landlinePhone: null,
      country: 'MA', 
      zipCode: null, 
      addressCompliment: null, 
      createdOn: new Date(), 
      modifiedOn: null ,
      ...createPatientDto
    }

    this.patients.unshift(newPatient);
       // send a brief details of patient for security purposes
       return this.patients.map(p =>{
        const patientBriefProfile = new PatientBriefProfileDto();
        patientBriefProfile.cin = p.cin;
        patientBriefProfile.firstName = p.firstName;
        patientBriefProfile.lastName = p.lastName;
        patientBriefProfile.gender = p.gender;
        patientBriefProfile.dateOfBirth = p.dateOfBirth;
        patientBriefProfile.insuranceCompany = p.insuranceCompany;
        patientBriefProfile.isAdherent = p.isAdherent ;
        return patientBriefProfile
       })

  }

  
  findAll() {
    // send a brief details of patient for security purposes
    return this.patients.map(p =>{
      const patientBriefProfile = new PatientBriefProfileDto();
      patientBriefProfile.cin = p.cin;
      patientBriefProfile.firstName = p.firstName;
      patientBriefProfile.lastName = p.lastName;
      patientBriefProfile.gender = p.gender;
      patientBriefProfile.dateOfBirth = p.dateOfBirth;
      patientBriefProfile.insuranceCompany = p.insuranceCompany;
      patientBriefProfile.isAdherent = p.isAdherent ;
      return patientBriefProfile
    })
  } 

  findOne(id: string) : PatientProfileDto {
    const patient : Patient = this.patients.filter(p => p.id === id)[0];
    const patientProfile = new PatientProfileDto();
    patientProfile.cin = patient.cin;
    patientProfile.firstName = patient.firstName;
    patientProfile.lastName = patient.lastName;
    patientProfile.gender = patient.gender;
    patientProfile.dateOfBirth = patient.dateOfBirth;
    patientProfile.insuranceCompany = patient.insuranceCompany;
    patientProfile.numAderent = patient.numAderent;
    patientProfile.isAdherent = patient.isAdherent;
    patientProfile.country = patient.country;
    patientProfile.province = patient.province;
    patientProfile.city = patient.city;
    patientProfile.address = patient.address;
    patientProfile.addressCompliment = patient.addressCompliment;
    patientProfile.zipCode = patient.zipCode;
    patientProfile.mobilePhone = patient.mobilePhone;
    patientProfile.landlinePhone = patient.landlinePhone;
    patientProfile.email = patient.email;
    
    return { ...patientProfile };
  }


}
