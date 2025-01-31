const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  species: { type: String, required: [true, "species is required"], trim: true },
  images: [
    { type: String, required: [false, "Animal photos are required"]} // turn true con multer
  ],
  name : {type : String, required: [true, "Animal name is required"],  trim: true, minlength: 2, maxlength: 50 },
  age: { type: Number, required: [true, "Animal age is required"], min: [0, "Age cannot be negative"]  },
  sex: { type: String, enum: ["male", "female"], required: [true, "Animal sex is required"], lowercase: true },
  weight: { type: Number, required: false, min: [0, "Age cannot be negative"] },
  idealHome: { type: String, enum: ["any location", "away from inner city"], required: false, lowercase: true  },
  livingWithChildren: { type: Boolean, required: false },
  livingWithDogs: { type: Boolean, required: false },
  livingWithCats: { type: Boolean, required: false },
  about: {type: String, required: false},
  likedBy: [
    { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
    }
  ]
}, 
  {
    discriminatorKey: 'species', 
    collection: 'animals', 
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        delete ret.__v;
        ret.id = ret._id;
        delete ret._id;
        return ret;
      },
    },
  }
);
const Animal = mongoose.model('Animal', schema);

const Dog = Animal.discriminator('dog', new mongoose.Schema({
  license: { type: Boolean, required: [true, "Animal license is required"] },
  size: { type: String, enum: ["small", "medium", "large", "giant"], required: [true, "Dog size is required"], lowercase: true },
  breed: { type: String, required: false }
}))

const Cat = Animal.discriminator('cat', new mongoose.Schema({
  breed: { type: String, required: false },
}))

const OtherAnimal = Animal.discriminator('otherAnimal', new mongoose.Schema({
  size: { type: String, enum: ["small", "medium", "large", "giant"], required: [true, "Animal size is required"], lowercase: true },
}))


module.exports = { Animal, Dog, Cat, OtherAnimal} ;