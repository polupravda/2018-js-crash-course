// Internship/Study exchange project.
// Classes: Applicants, Educational Institutions, Subjects

const Applicant = require('./models/applicant')
const Institution = require('./models/institution')
const Subject = require('./models/subject')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const SubjectService = require('./services/subject-service')

app.use(bodyParser.json())
// express.static(root, [options])
app.use(express.static('public'))

app.set('view engine', 'pug')

// app.get('/', async (req, res, next) => {
//     // res.send('smth')
//     res.send(await ApplicantService.findAll())
// })

app.get('/', async (req, res, next) => {
    res.send(await SubjectService.findAll())
})

app.get('/subject/:id', async (req, res) => {
    res.send(await SubjectService.find(req.subject.id))
})

app.get('/subjects/all', async (req, res, next) => {
    const subjects = await SubjectService.findAll()

    res.render('subject', { subjects: subjects })
})

app.post('/subject', async (req, res, next) => {
    const subject = await SubjectService.add(req.body)
    res.send(subject)
})

app.delete('/subject/:id', async (req, res, next) => {
    await SubjectService.del(req.params.id)
    res.send('ok!')
})

// app.delete('/subject/4', async (req, res, next) => {
//     await SubjectService.del('4')
//     res.send('ok!')
// })

app.listen(5000, () => {
    console.log('Server listening')
})

// subjects
var mathematics = new Subject('Mathematics')
var design = new Subject('Design')
var appliedArts = new Subject('Applied Arts')
var js = new Subject('JavaScript')
var engineering = new Subject('Engeneering')
var science = new Subject('Science')

//Applicants
var olga = new Applicant('Olga', 'Brilova', 'Kharkiv')
var elena = new Applicant('Elena', 'Volovicheva', 'Berlin')
var daniel = new Applicant('Daniel', 'Jurat', 'Berlin')
var maria = new Applicant('Maria', 'Moskalenko', 'Kharkiv')

//Institutions
var schoolOfArt = new Institution ('School of Art', 'Berlin') 
var technicalCollege = new Institution ('Technical College', 'Boston')
var nasa = new Institution('NASA', 'Washington')

//Subjects to Institutions

mathematics.addSubjectToInstitution(technicalCollege)
mathematics.addSubjectToInstitution(nasa)
design.addSubjectToInstitution(technicalCollege)
design.addSubjectToInstitution(schoolOfArt)
appliedArts.addSubjectToInstitution(schoolOfArt)
js.addSubjectToInstitution(technicalCollege)
js.addSubjectToInstitution(nasa)
engineering.addSubjectToInstitution(technicalCollege)
engineering.addSubjectToInstitution(nasa)
science.addSubjectToInstitution(technicalCollege)
science.addSubjectToInstitution(nasa)

//Interests to Applicants

mathematics.addInterestToApplicant(olga)
mathematics.addInterestToApplicant(elena)
mathematics.addInterestToApplicant(daniel)
design.addInterestToApplicant(olga)
design.addInterestToApplicant(elena)
design.addInterestToApplicant(maria)
js.addInterestToApplicant(elena)
js.addInterestToApplicant(daniel)
engineering.addInterestToApplicant(elena)
engineering.addInterestToApplicant(olga)
science.addInterestToApplicant(daniel)
science.addInterestToApplicant(maria)
science.addInterestToApplicant(olga)

//Find a match between an applicant's interests and subjects taught/trained in institutions
// function matchInternship(applicant, institution) {
//     this.applicant = applicant
//     this.institution = institution
//     var matchingSubjects = []

//     applicant.interests.forEach((el1) => institution.subjects.forEach((el2) => { if(el1 == el2) { matchingSubjects.push(el1) } }))

//     console.log(applicant.name + ', ' + 'The following subjects in ' + institution.name + ' ' + 'might be interesting to you: ' + matchingSubjects)
// }

//Applications

olga.applyToInternship(schoolOfArt)
olga.applyToInternship(technicalCollege)
elena.applyToInternship(schoolOfArt)
elena.applyToInternship(nasa)
elena.applyToInternship(technicalCollege)
daniel.applyToInternship(nasa)
maria.applyToInternship(schoolOfArt)
maria.applyToInternship(technicalCollege)

