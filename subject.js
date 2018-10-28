module.exports = class Subject {
    constructor(name) {
        this.name = name;
    }
    addSubjectToInstitution(institution) {
        institution.subjects.push(this)
    }
    addInterestToApplicant(applicant) {
        applicant.interests.push(this)
    }
    static create({ name }) {
        return new Subject(name)
    }
}