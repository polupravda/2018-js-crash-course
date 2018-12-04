const mongoose = require('mongoose')

const SubjectSchema = new mongoose.Schema({
    name: String,
    institutions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Institution'
    }],
    applicants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Applicant'
    }]
})

module.exports = mongoose.model('Subject', SubjectSchema)