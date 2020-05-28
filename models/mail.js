// const mongoose = require("mongoose");

// const mailSchema = new mongoose.Schema({
//   mailFromName: {
//     type: String,
//     required: true,
//     trim: true,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error("Email is invalid");
//       }
//     },
//   },
//   mailFrom: {
//     type: String,
//     required: true,
//     trim: true,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error("Email is invalid");
//       }
//     },
//   },
//   mailTo: {
//     type: String,
//     required: true,
//     trim: true,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error("Email is invalid");
//       }
//     },
//   },
//   subject: {
//     type: String,
//     required: true,
//   },
//   content: {
//     type: String,
//     required: true,
//   },
// });

class Mail{
  constructor(email, name, content){
    this.email = email;
    this.name = name;
    this.content = content;
  }

}

module.exports = Mail;
