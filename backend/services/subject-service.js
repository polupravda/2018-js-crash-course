const CircularJSON = require('circular-json')
const fs = require('fs')

const InstitutionModel = require('../models/institution')
const ApplicantModel = require('../models/applicant')
const SubjectModel = require('../models/subject')

async function addInstitution(subjectId, institutionId) {
    const subject = SubjectModel.findOne({ _id: subjectId })
    const institution = InstitutionModel.findOne({ _id: institutionId })

    subject.institutions.push(institution)
    await subject.save()
    return subject
}

async function addApplicant(subjectId, applicantId) {
    const subject = await SubjectModel.findOne({ _id: subjectId })
    const applicant = await ApplicantModel.findOne({ _id: applicantId })

    subject.applicants.push(applicant)
    await subject.save()
    return subject
}

async function findAll() {
    return SubjectModel.find()
        .populate('institutions')
        .populate('applicants')
}

async function add(subject) {
    return SubjectModel.create(subject) 
}

async function del(_id) {
    return SubjectModel.remove({ _id })
}

async function find(_id) {
    return SubjectModel.findOne({ _id })
        .populate('institutions')
        .populate('applicants')
}

async function findByName(subjectName) {
    return SubjectModel.find({ name: subjectName })
}

async function saveAll(subjects) {
    return new Promise((resolve, reject) => {
        fs.writeFile(dbPath, JSON.stringify(subjects),
        (err, file) => {
            if(err) return reject(err)

            resolve()
        })
    })
}

module.exports = {
    addInstitution,
    addApplicant,
    findAll,
    find,
    findByName,
    del,
    add
}