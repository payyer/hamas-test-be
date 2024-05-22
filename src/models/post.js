const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imageURL: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    published: {
        type: Boolean,
        default: false
    },
    datePublished: {
        type: String,
        required: true,
    },
});

//Export the model
module.exports = mongoose.model('User', userSchema);