import { database } from '../firebase';

function saveNewPet(userId, pet) {
   database.ref('savedPets/' + `${userId}/` + pet.id).set({
        name: pet.name,
        species: pet.species,
        breed: pet.breed,
        city: pet.city,
        state: pet.state,
        description: pet.description,
        email: pet.email,
    });
  }