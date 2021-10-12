const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Please enter your name"
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must use a valid email address'],
  },
  password: {
    type: String,
    required: true,
    validate: [({ length }) => length >= 8, "Password must be at least 8 characters."],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;