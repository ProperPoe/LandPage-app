const mongoose = require('mongoose');

const ExperiencesSchema = new mongoose.Schema({
    location: {
        type: String,
        required: true,
    }
})

const ExperiencesModel = mongoose.model('experiences', ExperiencesSchema);
module.exports = ExperiencesModel;