const CircularJSON = require('circular-json')
const fs = require('fs')

const InstitutionModel = require('../models/institution')
const ApplicantModel = require('../models/applicant')
const SubjectModel = require('../models/subject')

async function addInterest(applicantId, interestId) {
    const applicant = await ApplicantModel.findOne({ _id: applicantId })
    const subject = await SubjectModel.findOne({ _id: interestId })

    applicant.interests.push(subject)
    await applicant.save()
    return applicant
}

async function addApplication(applicantId, institutionId) {
    const applicant = await ApplicantModel.findOne({ _id: applicantId })
    const institution = await InstitutionModel.findOne({ _id: institutionId })

    applicant.applications.push(institution)
    await applicant.save()
    return applicant
}

async function findAll() {
    return ApplicantModel.find()
        .populate('interests')
        .populate('applications')
}

async function add(applicant) {
    return ApplicantModel.create(applicant)
}

async function del(_id) {
    return ApplicantModel.remove({ _id })
}

async function find(_id) {
    return ApplicantModel.findOne({ _id })
        .populate('interests')
        .populate('applications')
}

async function findByName(applicantName) {
    return ApplicantModel.find({ name: applicantName })
}

module.exports = {
    addInterest,
    addApplication,
    findAll,
    find,
    findByName,
    del,
    add
}