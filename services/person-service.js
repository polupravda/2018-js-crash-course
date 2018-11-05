const fs = require('fs')
const CircularJSON = require('circular-json')
const dbPath = `${__dirname}/../person-database.json`
const ApplicantModel = require('../models/applicant')

const findAll = async() => {
    return new Promise((resolve, reject) => {
        fs.readFile(dbPath, 'utf8', (err, file) => {
            if (err) return reject(err)

            const applicants = CircularJSON.parse(file).map(ApplicantModel.create)

            resolve(applicants)
        })
    })    
}

const add = async(applicant) => {
    const allApplicants = await findAll()
    const lastApplicant = allApplicants[allApplicants.length - 1]
    const lastApplicantId = lastApplicant && lastApplicant.id || 0
    applicant.id = lastApplicantId + 1

    applicant = ApplicantModel.create(applicant)
    allApplicants.push(applicant)

    await saveAll(allApplicants)

    return applicant
}

const del = async(applicantId) => {
    const allApplicants = await findAll()
    const applicantIndex = allApplicants.findIndex(p => p.id == applicantId)
    if (applicantIndex < 0) return

    allApplicants.splice(applicantIndex, 1)

    saveAll(allApplicants)
}

const find = async(personId) => {
    const allApplicants = await findAll()

    // return allApplicants.find(p => p.id == personId)
    return allApplicants.find(function(p) {
        p.id == personId
    })
}

const saveAll = async(applicants) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(dbPath, CircularJSON.stringify(applicants), (err, file) => {
            if (err) return reject(err)

            resolve()
        })
    })
}

module.exports = {
    findAll,
    find,
    add,
    del
}