const mongoose = require('mongoose');


const savedPets = new mongoose.Schema({
    userId: {type: String, required: true},
    // add other fields for saved pet 
})

