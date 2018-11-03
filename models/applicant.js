const Subject = require('./subject')
const Institution = require('./institution')

module.exports = class Applicant {
    constructor (name, surname, location, id) {
        this.name = name || '';
        this.surname = surname || '';
        this.location = location || '';
        this.id = id || 0;
        this.interests = [];
        this.applications = [];
    }
    applyToInternship(institution) {
        this.applications.push(institution);
        institution.applicants.push(this)
    }
    static create({ name, surname, location, id, interests, applications }) {
        const applicant = new Applicant(name, surname, location, id)

        applicant.interests = interests.map(Subject.create)
        applicant.applications = applications.map(Institution.create)

        return applicant
    }
}