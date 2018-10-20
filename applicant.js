module.exports = class Applicant {
    constructor (name, surname, location) {
        this.name = name;
        this.surname = surname;
        this.location = location;
        this.interests = [];
        this.applications = [];
    }
    applyToInternship(institution) {
        this.applications.push(institution);
        institution.applicants.push(this)
    }
}