const fs = require('fs')
const InstitutionModel = require('../models/institution')
const ApplicantModel = require('../models/applicant')
const SubjectModel = require('../models/subject')

async function addApplicant(institutionId, applicantId) {
    const institution = await InstitutionModel.findOne({ _id: institutionId })
    const applicant = await ApplicantModel.findOne({ _id: applicantId })

    institution.applicants.push(applicant)

    await institution.save()

    return institution
}

async function addSubject(institutionId, subjectId) {
    const institution = await InstitutionModel.findOne({ _id: institutionId })
    const subject = await SubjectModel.findOne({ _id: subjectId })

    institution.subjects.push(subject)

    await institution.save()

    return institution
}

async function findAll() {
    return InstitutionModel.find()
        .populate('applicants')
        .populate('subjects')
}

async function add(institution) {
    return InstitutionModel.create(institution)
}

async function del(_id) {
    return InstitutionModel.remove({ _id })
}

async function find(_id) {
    return InstitutionModel.findOne({ _id })
        .populate('applicants')
        .populate('subjects')
}

async function findByName(institutionName) {
    return InstitutionModel.findOne({ name: institutionName })
}

module.exports = {
    addApplicant,
    addSubject,
    findAll,
    find,
    findByName,
    del,
    add
}