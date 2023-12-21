import { Patient } from "src/patients/entities/patient.entity";


// we can use closure, function first classe citizen, Hogher oder function, to create a local memoization 
export function memoizationPatients(){
    let stub_patients : Patient[] = [
        {
            id: '1',
            cin: 'AB1548', // cin is unique as well, but it's preferable to use id as unique value, in case we want to update cin
            firstName: 'Azeddine',
            lastName: "Bouziani",
            gender: 'F',
            dateOfBirth: '01/01/1965',
            isAdherent: false,
            email: null,
            mobilePhone: '0682658958',
            landlinePhone: null,
            insuranceCompany: 'FAR', // preferable to have a table where we have all the diffrent companies and register here the Id of the company
            numAderent: 545464666646,
            country: 'MA',
            province: 'Grand-Casablanca',
            city: 'Casablanca',
            zipCode: 20230,
            address: 'Boulevrad xxx yyy zzz',
            addressCompliment: null,
            createdOn: new Date(),
            modifiedOn: null
        },
        {
            id: '1',
            cin: 'AB1548', // cin is unique as well, but it's preferable to use id as unique value, in case we want to update cin
            firstName: 'laila',
            lastName: "Bouziani",
            gender: 'F',
      dateOfBirth: '01/01/1965',
            isAdherent: false,
            email: null,
            mobilePhone: '0682658958',
            landlinePhone: null,
            insuranceCompany: 'FAR', // preferable to have a table where we have all the diffrent companies and register here the Id of the company
            numAderent: 545464666646,
            country: 'MA',
            province: 'Grand-Casablanca',
            city: 'Casablanca',
            zipCode: 20230,
            address: 'Boulevrad xxx yyy zzz',
            addressCompliment: null,
            createdOn: new Date(),
            modifiedOn: null
        },{
            id: '1',
            cin: 'AB1548', // cin is unique as well, but it's preferable to use id as unique value, in case we want to update cin
            firstName: 'laila',
            lastName: "Bouziani",
            gender: 'F',
      dateOfBirth: '01/01/1965',
            isAdherent: false,
            email: null,
            mobilePhone: '0682658958',
            landlinePhone: null,
            insuranceCompany: 'FAR', // preferable to have a table where we have all the diffrent companies and register here the Id of the company
            numAderent: 545464666646,
            country: 'MA',
            province: 'Grand-Casablanca',
            city: 'Casablanca',
            zipCode: 20230,
            address: 'Boulevrad xxx yyy zzz',
            addressCompliment: null,
            createdOn: new Date(),
            modifiedOn: null
        },
        {
            id: '1',
            cin: 'AB1548', // cin is unique as well, but it's preferable to use id as unique value, in case we want to update cin
            firstName: 'laila',
            lastName: "Bouziani",
            gender: 'F',
      dateOfBirth: '01/01/1965',
            isAdherent: false,
            email: null,
            mobilePhone: '0682658958',
            landlinePhone: null,
            insuranceCompany: 'FAR', // preferable to have a table where we have all the diffrent companies and register here the Id of the company
            numAderent: 545464666646,
            country: 'MA',
            province: 'Grand-Casablanca',
            city: 'Casablanca',
            zipCode: 20230,
            address: 'Boulevrad xxx yyy zzz',
            addressCompliment: null,
            createdOn: new Date(),
            modifiedOn: null
        },{
            id: '1',
            cin: 'AB1548', // cin is unique as well, but it's preferable to use id as unique value, in case we want to update cin
            firstName: 'laila',
            lastName: "Bouziani",
            gender: 'F',
      dateOfBirth: '01/01/1965',
            isAdherent: false,
            email: null,
            mobilePhone: '0682658958',
            landlinePhone: null,
            insuranceCompany: 'FAR', // preferable to have a table where we have all the diffrent companies and register here the Id of the company
            numAderent: 545464666646,
            country: 'MA',
            province: 'Grand-Casablanca',
            city: 'Casablanca',
            zipCode: 20230,
            address: 'Boulevrad xxx yyy zzz',
            addressCompliment: null,
            createdOn: new Date(),
            modifiedOn: null
        },
        {
            id: '1',
            cin: 'AB1548', // cin is unique as well, but it's preferable to use id as unique value, in case we want to update cin
            firstName: 'laila',
            lastName: "Bouziani",
            gender: 'F',
      dateOfBirth: '01/01/1965',
            isAdherent: false,
            email: null,
            mobilePhone: '0682658958',
            landlinePhone: null,
            insuranceCompany: 'FAR', // preferable to have a table where we have all the diffrent companies and register here the Id of the company
            numAderent: 545464666646,
            country: 'MA',
            province: 'Grand-Casablanca',
            city: 'Casablanca',
            zipCode: 20230,
            address: 'Boulevrad xxx yyy zzz',
            addressCompliment: null,
            createdOn: new Date(),
            modifiedOn: null
        },{
            id: '1',
            cin: 'AB1548', // cin is unique as well, but it's preferable to use id as unique value, in case we want to update cin
            firstName: 'laila',
            lastName: "Bouziani",
            gender: 'F',
      dateOfBirth: '01/01/1965',
            isAdherent: false,
            email: null,
            mobilePhone: '0682658958',
            landlinePhone: null,
            insuranceCompany: 'FAR', // preferable to have a table where we have all the diffrent companies and register here the Id of the company
            numAderent: 545464666646,
            country: 'MA',
            province: 'Grand-Casablanca',
            city: 'Casablanca',
            zipCode: 20230,
            address: 'Boulevrad xxx yyy zzz',
            addressCompliment: null,
            createdOn: new Date(),
            modifiedOn: null
        },
        {
            id: '1',
            cin: 'AB1548', // cin is unique as well, but it's preferable to use id as unique value, in case we want to update cin
            firstName: 'laila',
            lastName: "Bouziani",
            gender: 'F',
      dateOfBirth: '01/01/1965',
            isAdherent: false,
            email: null,
            mobilePhone: '0682658958',
            landlinePhone: null,
            insuranceCompany: 'FAR', // preferable to have a table where we have all the diffrent companies and register here the Id of the company
            numAderent: 545464666646,
            country: 'MA',
            province: 'Grand-Casablanca',
            city: 'Casablanca',
            zipCode: 20230,
            address: 'Boulevrad xxx yyy zzz',
            addressCompliment: null,
            createdOn: new Date(),
            modifiedOn: null
        },{
            id: '1',
            cin: 'AB1548', // cin is unique as well, but it's preferable to use id as unique value, in case we want to update cin
            firstName: 'laila',
            lastName: "Bouziani",
            gender: 'F',
      dateOfBirth: '01/01/1965',
            isAdherent: false,
            email: null,
            mobilePhone: '0682658958',
            landlinePhone: null,
            insuranceCompany: 'FAR', // preferable to have a table where we have all the diffrent companies and register here the Id of the company
            numAderent: 545464666646,
            country: 'MA',
            province: 'Grand-Casablanca',
            city: 'Casablanca',
            zipCode: 20230,
            address: 'Boulevrad xxx yyy zzz',
            addressCompliment: null,
            createdOn: new Date(),
            modifiedOn: null
        },
        {
            id: '1',
            cin: 'AB1548', // cin is unique as well, but it's preferable to use id as unique value, in case we want to update cin
            firstName: 'siham',
            lastName: "Bouziani",
            gender: 'F',
            dateOfBirth: '01/01/1965',
            isAdherent: false,
            email: null,
            mobilePhone: '0682658958',
            landlinePhone: null,
            insuranceCompany: 'FAR', // preferable to have a table where we have all the diffrent companies and register here the Id of the company
            numAderent: 545464666646,
            country: 'MA',
            province: 'Grand-Casablanca',
            city: 'Casablanca',
            zipCode: 20230,
            address: 'Boulevrad xxx yyy zzz',
            addressCompliment: null,
            createdOn: new Date(),
            modifiedOn: null
        },
    ]

    function getPatient(){
        return stub_patients
    }

    function addPatient(patient:Patient){
        stub_patients.push(patient)
        return stub_patients
    }

    return {getPatient, addPatient}


} 