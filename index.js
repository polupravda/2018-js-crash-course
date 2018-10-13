// Internship/Study exchange project.
// Classes: Applicants, Educational Institutions, Subjects

var Applicant = class {
    constructor (name, surname, location) {
        this.name = name;
        this.surname = surname;
        this.location = location;
        this.interests = interests;
        this.applications = [];
    }
    applyToInternship(institution) {
        this.applications.push(institution);
        institution.applicants.push(this)
    }
}

var Institution = class {
    constructor(name, location, subjects) {
        this.name = name;
        this.location = location;
        this.subjects = subjects;
        this.applicants = [];
    }
    addApplicant(applicant) {
        this.applicants.push(applicant)
    }
}

var Subject = class {
    constructor(name) {
        this.name = name;
        this.institutions = [];
    }
}

var interests

var olga = new Applicant('Olga', 'Brilova', 'Kharkiv', interests = ['Design', 'Applied Arts'])
var elena = new Applicant('Elena', 'Volovicheva', 'Berlin', interests = ['Design', 'JS'])
var daniel = new Applicant('Daniel', 'Jurat', 'Berlin', interests = ['JS', 'Engineering'])
var maria = new Applicant('Maria', 'Moskalenko', 'Kharkiv', interests = ['Applied Arts', 'Engineering'])

var subjects;
var schoolOfArt = new Institution ('School of Art', 'Berlin', subjects = ['Applied Arts', 'Design']) 
var technicalCollege = new Institution ('Technical College', 'Boston', subjects = ['JS', 'Design'])
var nasa = new Institution('NASA', 'Washington', subjects = ['Engineering', 'JS'])

let institutions = [schoolOfArt, technicalCollege, nasa]

function matchInternship(applicant, institution) {
    this.applicant = applicant
    this.institution = institution
    var matchingSubjects = []

    applicant.interests.forEach((el1) => institution.subjects.forEach((el2) => { if(el1 == el2) { matchingSubjects.push(el1) } }))

    console.log(applicant.name + ', ' + 'The following subjects in ' + institution.name + ' ' + 'might be interesting to you: ' + matchingSubjects)
}

olga.applyToInternship(schoolOfArt)
olga.applyToInternship(technicalCollege)
elena.applyToInternship(schoolOfArt)
elena.applyToInternship(nasa)
elena.applyToInternship(technicalCollege)
daniel.applyToInternship(nasa)
maria.applyToInternship(schoolOfArt)
maria.applyToInternship(technicalCollege)