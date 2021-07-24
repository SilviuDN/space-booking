const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    // required: true,
    // validate: {
    //   validator: function (email) {
    //     return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    //   },
    //   message: 'Please, enter a valid email'
    // }
  },

  password: {
    type: String,
    required: true
  },                                                                 // Deseable exigir mayusculas numeros etc

  name: {
    type: String,
    minLegth: 1,
    maxLength: 50,
    // required: true,
    set: value => value.charAt(0).toUpperCase() + value.substring(1)  // TRIM, SEGUNDO NOMBRE!!!
  },

  surname: {
    type: String,
    minLegth: 1,
    maxLength: 50,
    // required: true,
    set: value => value.charAt(0).toUpperCase() + value.substring(1) // TRIM, SEGUNDO APELLIDO!!!
  },

  personalId: { type: String },

  typeOfId: {
    type: String,
    enum: ['dni', 'passport', 'other'],
  },

  phone: {
    type: String,
    // required: true
  },                                                                  // prefijo del pais

  address: {
    street: { type: String },
    number: { type: String, default: null },
    zipCode: { type: String },
    city: { type: String },
    country: { type: String }
  },


  //
  flights: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'Flight'
  }],

  role: {
    type: String,
    enum: ['user', 'moderador', 'admin'],
    default: 'user'
  },

  profileImg: {                                                     //Cloudinary
    type: String,
    // required: true,
  }

},

  { timestamps: true }
)

const User = mongoose.model('User', userSchema);

module.exports = User;