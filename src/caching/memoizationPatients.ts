import { Patient } from "src/patients/entities/patient.entity";
import { listPatients } from "./staticListPatient";

// we can use closure, function first classe citizen, Higher oder function, to create a local memoization 
export function memoizationPatients(){

    let stub_patients : Patient[] = listPatients;

    //the stub_patients list is in the context scope of memoizationPatients function;
    // due to closure + HOF + function first class citizen, stub_patients will stay in the memory, and 
    // the functions getPatient and addPatient they will have access to it even if they left the scope

    function getPatient(){
        return stub_patients
    }

    function addPatient(patient:Patient){
        stub_patients.push(patient)
        return stub_patients
    }

    return {getPatient, addPatient}


} 