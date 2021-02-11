import { database } from '../firebase';

export default function addSubmission(id, newPet) {
  database.ref('submissions/' + id).set({
    [newPet.petName]: {
      contactName: newPet.name,
      address: newPet.address,
      city: newPet.city,
      state: newPet.locationState,
      zipCode: newPet.zipCode,
      email: newPet.email,
      phone: newPet.phone,
      photo: newPet.photo,
      type: newPet.type,
      breed: newPet.breed,
      sex: newPet.sex,
      savedToCloud: 'false',
    },
  });
}

