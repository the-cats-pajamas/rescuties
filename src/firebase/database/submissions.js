import { database } from '../firebase';

function addSubmission(userID, address, breed, city, email, locationState, name, 
    petName, phone, photo, savedToCloud, sex, type, zipCode) {
    database.ref('submissions/' + userID).set({
        [petName] : {
            contactName: name,
            address: address,
            city: city,
            state: locationState,
            zipCode: zipCode,
            email: email,
            phone: phone,
            photo: photo,
            type: type,
            breed: breed,
            sex: sex,
            savedToCloud: 'false'
        }
    });
  }