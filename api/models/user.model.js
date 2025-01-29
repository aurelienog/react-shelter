const mongoose = require('mongoose');


const schema = new mongoose.Schema({
  image: { type: String },
  name:  {
    type : String, 
    required: [true, "Name is required"],
    minlength: [3, "User name needs at least 3 chars"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please fill a valid email address"],
    unique: true,
    lowercase: true,
    trim: true //elimina los espacios
  },
  password: {
    type: String, 
    required: [true, "Password is required"],
    minLength: [8, "min length: 8"]
  },
  role: {
    type: String,
    enum: ['admin', 'guest'],
    default: 'guest'
  },
  favoriteDogs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Dog",
    }
  ],
  favoriteCats: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cat",
    }
  ],
}, 
{
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: function (doc, ret) {
      delete ret.__v;
      ret.id = ret._id;
      delete ret._id;
      delete ret.password;
      return ret;
    },
  },
}
);

schema.virtual("favoriteAnimals", {
  ref: ['Dog', 'Cat'], // modelo "Animal" que agrupa Dog y Cat
    localField: '_id',
    foreignField: 'likedBy',
    justOne: false
});

module.exports = mongoose.model('User', schema);