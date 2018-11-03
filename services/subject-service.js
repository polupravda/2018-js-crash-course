const fs = require('fs')
const CircularJSON = require('circular-json')
const dbPath = `${__dirname}/../subject-database.json`
const SubjectModel = require('../models/subject')

const findAll = async() => {
    return new Promise((resolve, reject) => {
        fs.readFile(dbPath, 'utf8', (err, file) => {
            if (err) return reject(err)

            const subjects = CircularJSON.parse(file).map(SubjectModel.create)

            resolve(subjects)
        })
    })    
}

const add = async(subject) => {
    const allSubjects = await findAll()
    const lastSubject = allSubjects[allSubjects.length - 1]
    const lastSubjectId = lastSubject && lastSubject.id || 0
    subject.id = lastSubjectId + 1

    subject = SubjectModel.create(subject)
    allSubjects.push(subject)

    await saveAll(allSubjects)

    return subject
}

const del = async(subjectId) => {
    const allSubjects = await findAll()
    const subjectIndex = allSubjects.findInex(p => p.id == subjectId)
    if (subjectIndex < 0) return

    allSubjects.splice(subjectIndex, 1)

    saveAll(allSubjects)
}

const find = async(personId) => {
    const allSubjects = await findAll()

    // return allSubjects.find(p => p.id == personId)
    return allSubjects.find(function(p) {
        p.id == personId
    })
}

const saveAll = async(subjects) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(dbPath, CircularJSON.stringify(subjects), (err, file) => {
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