/**
 * cloudinary.js - configuración opcional para subir imágenes/videos
 * Dejar CLOUDINARY_URL en .env si se utiliza.
 */
const cloudinary = require('cloudinary').v2;
if(process.env.CLOUDINARY_URL){
  cloudinary.config({cloudinary_url: process.env.CLOUDINARY_URL});
}
module.exports = cloudinary;
