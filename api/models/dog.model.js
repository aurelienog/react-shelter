const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  images: [
    { type: String, required: [false, "Dog photos are required"]}
  ],
  name : {type : String, required: [true, "Dog name is required"] },
  age: { type: Number, required: [true, "Dog age is required"] },
  breed: { type: String, required: false },
  sex: { type: String, enum: ["Male", "Female"], required: [true, "Dog sex is required"] },
  size: { type: String, enum: ["Small", "Medium", "Large", "Giant"], required: [true, "Dog size is required"] },
  weight: { type: Number, required: false },
  license: { type: Boolean, required: [true, "Dog license is required"] },
  idealHome: { type: String, enum: ["Any location", "Away from inner city"], required: false },
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

module.exports = mongoose.model("Dog", schema)