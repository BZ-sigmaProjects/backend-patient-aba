import { Patient } from '../entities/patient.entity';

export class CreatePatientResponseDto {
  success: boolean;
  createdPatient: Patient;
}
