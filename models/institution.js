const mongoose = require('mongoose')

const InstitutionSchema = new mongoose.Schema({
    name: String,
    location: String,
    subjects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject'
    }],
    applicants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Applicant'
    }]
})

module.exports = mongoose.model('Institution', InstitutionSchema)