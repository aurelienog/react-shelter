const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'react-shelter',
    allowed_formats: ['jpg', 'jpeg', 'png', 'gif']
  },
});

module.exports = multer({ storage: storage });

//TODO eliminar fotos del storage si se elimina el modelo