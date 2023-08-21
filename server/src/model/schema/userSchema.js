const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
      validate: {
        validator: function (valor) {
          return /^[a-záàâãéèêíïóôõöúçñ ]+$/i.test(valor); // Testa se o valor contém apenas letras (incluindo acentuadas)
          },
          message: 'The value must only contains words.',
        },
      },

    user_name: {
      type: String,
      unique: true,
      required: true,
    },

    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
