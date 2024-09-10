const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
email: {
    type: String,
    unique: true,
    required: true,
    match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "pls provide a valid email"],
},
password: {
    type: String,
    required: true,
},
});

module.exports = mongoose.model("User", userSchema);



//READ ON; REGEX; This is called regular expressions in other words, they are used to define patterns
//BCRYPT; Bcrypt is a password hashing algorithm designed to be slow and computationally expensive