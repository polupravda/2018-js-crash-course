module.exports = class Subject {
    constructor(name, id) {
        this.name = name || '';
        this.id = id || '';
    }
    addSubjectToInstitution(institution) {
        institution.subjects.push(this)
    }
    addInterestToApplicant(applicant) {
        applicant.interests.push(this)
    }
    static create({ name, id }) {
        const subject = new Subject(name, id)

        return subject
    }
}