import ExperiencesModel from "../models/Experiences";

const router = express.Router();

exports.getExperiences = (req, res) => {
    ExperiencesModel.find({}, (err, result) => {
        if(err){
            res.status(400).json(err)
        } else {
            res.status(200).json(result)
        }
    })
}

exports.createExperience = async (req, res) => {
    const experience = req.body;
    const newEx =  ExperiencesModel;
    await newEx.save();

    res.json(experience)
}