const Subject = require('./subject')
const Applicant = require('./applicant')

module.exports = class Institution {
    constructor(name, location) {
        this.name = name;
        this.location = location;
        this.subjects = [];
        this.applicants = [];
    }
    static create({ name, location, subjects, applicants }) {
        const institution = new Institution(name, location)

        institution.subjects = subjects.map(Subject.create)
        institution.applicants = applicants.map(Applicant.create)

        return institution
    }
}