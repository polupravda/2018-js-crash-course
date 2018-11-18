const express = require('express')
const bodyParser = require('body-parser')

const SubjectService = require('./services/subject-service')
const ApplicantService = require('./services/applicant-service')
const InstitutionService = require('./services/institution-service')

require('./database-connection')

const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
  })

// Subject Endpoints

app.get('/subject/all', async (req, res, next) => {
    const subjects = await SubjectService.findAll()

    res.render('subject', { subjects })
})

app.get('/subject/:id', async (req, res) => {
    const applicant = await SubjectService.find(req.params.id)
    res.send(applicant)
})

app.get('/subject/name/:name', async (req, res) => {
    const applicant = await SubjectService.findByName(req.params.name)
    res.send(applicant)
})

app.post('/subject', async (req, res, next) => {
    const subject = await SubjectService.add(req.body)
    res.send(subject)
})

app.delete('/subject/:id', async (req, res, next) => {
    const subject = await SubjectService.del(req.params.id)
    res.send(subject)
})

// Applicant Endpoints

app.get('/applicant/all-list', async (req, res) => {
    const applicants = await ApplicantService.findAll()
    res.render('applicant', { applicants })
})

app.get('/applicant/all', async (req, res) => {
    const applicants = await ApplicantService.findAll()

    res.send(applicants)
})

app.post('/applicant/add-interest', async (req, res) => {
    const applicant = await ApplicantService.addInterest(req.body.applicantId, req.body.interestId)

    res.send(applicant)
})

app.post('/applicant/add-application', async (req, res) => {
    const applicant = await ApplicantService.addApplication(req.body.applicantId, req.body.institutionId)

    res.send(applicant)
})

app.get('/applicant/:id', async (req, res) => {
    const applicant = await ApplicantService.find(req.params.id)
    res.render('data', {data: applicant})
})

app.get('/applicant/name/:name', async (req, res) => {
    const applicant = await ApplicantService.findByName(req.params.name)
    res.send(applicant)
})

app.post('/applicant', async (req, res) => {
    const applicant = await ApplicantService.add(req.body)
    
    res.send(applicant)
})

app.get('/profile/:id', async (req, res) => {
    const applicant = await ApplicantService.find(req.params.id)

    res.render('profile', { applicant })
})

app.delete('/applicant/:id', async (req, res) => {
    const applicant = await ApplicantService.del(req.params.id)
    res.send(applicant)
})

// Institution Endpoints

app.get('/institution/all-list', async (req, res) => {
    const institutions = await InstitutionService.findAll()
    res.render('institution', { institutions })
})

app.get('/institution/all', async (req, res) => {
    const institutions = await InstitutionService.findAll()

    res.send(institutions)
})

app.post('/institution/add-applicant', async (req, res) => {
    const institution = await InstitutionService.addApplicant(req.body.institutionId, req.body.applicantId)

    res.send(institution)
})

app.post('/institution/add-subject', async (req, res) => {
    const institution = await InstitutionService.addSubject(req.body.institutionId, req.body.subjectId)

    res.send(institution)
})

app.get('/institution/:id', async (req, res) => {
    const institution = await InstitutionService.find(req.params.id)

    res.send(institution)
})

app.get('/institution/name/:name', async (req, res) => {
    const institution = await InstitutionService.findByName(req.params.name)
})

app.post('/institution', async (req, res) => {
    const institution = await InstitutionService.add(req.body)

    res.send(institution)
})

app.delete('/institution', async (req, res) => {
    const institution = await InstitutionService.del(req.params.id)

    res.send(institution)
})

module.exports = app