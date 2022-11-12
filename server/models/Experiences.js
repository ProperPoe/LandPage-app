const mongoose = require('mongoose');

const ExperiencesSchema = new mongoose.Schema({
    location: {
        type: String,
        required: true,
    },
    image: String,
    user: {
        type: mongoose.Types.ObjectId,
        ref: "users",
        required: true,
    },
})

const ExperiencesModel = mongoose.model('experiences', ExperiencesSchema);
module.exports = ExperiencesModel;