const mongoose = require('mongoose')

const ApplicantSchema = new mongoose.Schema({
    name: String,
    surname: String,
    location: String,
    interests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject'
    }],
    applications: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Institution'
    }]
});

module.exports = mongoose.model('Applicant', ApplicantSchema)