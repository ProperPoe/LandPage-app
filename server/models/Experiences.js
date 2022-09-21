const mongoose = require('mongoose');

const ExperiencesSchema = new mongoose.Schema({
    location: {
        type: String,
        required: true,
    },
    image: String,
    likeCount: {
        type: Number,
        default: 0,
    },
})

const ExperiencesModel = mongoose.model('experiences', ExperiencesSchema);
module.exports = ExperiencesModel;