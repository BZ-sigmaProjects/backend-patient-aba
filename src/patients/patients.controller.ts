import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDto, PatientProfileDto } from './dtos';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  //must add status response, 
  @Post()
  create(@Body() createPatientDto: CreatePatientDto) {
    return this.patientsService.create(createPatientDto);
  }

  @Get()
  findAll() {
    return this.patientsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) : PatientProfileDto {
    return this.patientsService.findOne(id);
  }

}
