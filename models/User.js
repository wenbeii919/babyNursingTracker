const mongoose = require('mongoose');
const { Schema } = mongoose; // mongoose has a property called schema. here we sign this property to a variable called Schema

const userSchema = new Schema({
    googleID: String
});

// .mondel() creates a new collection called 'users' by using the userSchema that's defined above
mongoose.model('users', userSchema);