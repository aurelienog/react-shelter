const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//TODO isActive / confirmation mail

const ADMIN_USERS = (process.env.ADMIN_USERS || 'admin@example.org')
  .split(',')
  .map(email => email.trim());

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
  favoriteAnimals : [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Animal" }]
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

schema.pre("save", function (next) {
  const user = this;

  if (ADMIN_USERS.includes(user.email)) {
    user.role = 'admin';
  }

  if (user.isModified("password")) {
    bcrypt
      .hash(user.password, 10)
      .then((encryptedPassword) => {
        user.password = encryptedPassword;
        next();
      })
      .catch(next)
  } else {
    next();
  }
});

schema.methods.checkPassword = function (password) {
  return bcrypt.compare(password, this.password);
  console.log('password:',password);
  console.log('schema password:',this.password);
};

module.exports = mongoose.model('User', schema);