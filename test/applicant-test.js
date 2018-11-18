import test from "ava"
import request from "supertest"
import app from "../app"

test ('Get list of applicants', async t => {
    const applicantToCreate = { name: 'Elena', surname: 'Volovicheva', location: 'Berlin', interests: [], applications: [] }

    const creation = await request(app)
    .post('/applicant')
    .send(applicantToCreate)

    const res = await request(app).get('./applicant/all')

    t.is(res.status, 200)
    t.true(Array.isArray(res.body), "Body should be an array")
    t.true(res.body.length > 0)
})

test('Create a new applicant', async t => {
    t.plan(6)

    const applicantToCreate = { name: 'Elena', surname: 'Volovicheva', location: 'Berlin', interests: [], applications: [] }

    const res = await request(app)
    .post('/applicant')
    .send(applicantToCreate)

    t.is(res.status, 200)
    t.deepEqual(res.body.name, applicantToCreate.name)
    t.deepEqual(res.body.surname, applicantToCreate.surname)
    t.deepEqual(res.body.location, applicantToCreate.location)
    t.deepEqual(res.body.interests, applicantToCreate.interests)
    t.deepEqual(res.body.applications, applicantToCreate.applications)
})

test('Fetch an applicant', async t => {
    t.plan(2)

    const applicantToCreate = { name: 'Elena', surname: 'Volovicheva', location: 'Berlin', interests: [], applications: [] }

    const applicantUserCreated = (await request(app)
    .post('/applicant')
    .send(applicantToCreate)).body

    const fetchRes = await request(app).get(`/applicant/${applicantUserCreated._id}/json`)

    const applicantUserFetched = fetchRes.body

    t.is(fetchRes.status, 200)
    t.deepEqual(applicantUserFetched, applicantUserCreated)
})

test('Delete an applicant', async t => {
    t.plan(3)

    const applicant = (await request(app)
    .post('/applicant')
    .send({ name: 'Elena', surname: 'Volovicheva', location: 'Berlin', interests: [], applications: [] })).body

    const del = await request(app).delete(`/applicant/${applicant._id}`)

    t.is(del.status, 200)
    t.is(del.text, "ok")

    const fetch = await request(app).get(`/applicant/${applicant._id}/json`)

    t.is(fetch.status, 404)
})