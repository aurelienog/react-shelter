const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  images: [
    { type: String, required: [true, "Photos are required"]}
  ],
  name : {type : String, required: [true, "Name is required"] },
  age: { type: Number, required: [true, "Age is required"] },
  breed: { type: String, required: false },
  sex: { type: String, enum: ["Male", "Female"], required: [true, "Sex is required"] },
  size: { type: String, enum: ["Small", "Medium", "Large", "Giant"], required: [true, "Size is required"] },
  weight: { type: Number, required: false },
  license: { type: Boolean, required: [true, "License is required"] },
  idealHome: { type: String, enum: ["Any location", "Away from inner city"], required: false },
  livingWithChildren: { type: Boolean, required: false },
  livingWithDogs: { type: Boolean, required: false },
  livingWithCats: { type: Boolean, required: false },
  about: {type: String, required: false},
}, 
  {timestamps : true}
)

module.exports = mongoose.model("Dog", schema)