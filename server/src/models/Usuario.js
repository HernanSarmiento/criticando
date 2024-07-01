const { mongoose } = require('mongoose');

const newUser = new mongoose.model('Usuario', {
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    token: { type: String }
});
module.exports = newUser;