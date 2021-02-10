import { database } from '../firebase';

function saveNewPet(userId, pet) {
   database.ref('savedPets/' + `${userId}/` + pet.id).set({
        name: pet.name,
        species: pet.species,
        breed: pet.breed,

    });
  }