import { database } from '../firebase';

export default function saveNewPet(userId, pet) {
   database.ref('savedPets/' + `${userId}/` + pet.id).set({
        name: pet.name,
        species: pet.species,
        breed: pet.breeds.primary,
        city: pet.contact.address.city,
        state: pet.contact.address.state,
        description: pet.description,
    });
  }