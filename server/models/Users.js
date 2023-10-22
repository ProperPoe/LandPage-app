const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    posts:[{type: mongoose.Types.ObjectId, ref: "experiences", required: true}],
})

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel; 