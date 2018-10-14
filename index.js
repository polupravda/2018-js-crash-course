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
    constructor(name, location) {
        this.name = name;
        this.location = location;
        this.subjects = [];
        this.applicants = [];
    }
}

var Subject = class {
    constructor(name) {
        this.name = name;
    }
    addSubjectToInstitution(institution) {
        institution.subjects.push(this)
    }
}

// subjects
var mathematics = new Subject('Mathematics')
var design = new Subject('Design')
var appliedArts = new Subject('Applied Arts')
var js = new Subject('JavaScript')
var engineering = new Subject('Engeneering')
var science = new Subject('Science')

//Applicants
var olga = new Applicant('Olga', 'Brilova', 'Kharkiv', interests = ['Design', 'Applied Arts'])
var elena = new Applicant('Elena', 'Volovicheva', 'Berlin', interests = ['Design', 'JS', 'Mathematics'])
var daniel = new Applicant('Daniel', 'Jurat', 'Berlin', interests = ['JS', 'Engineering', 'Science'])
var maria = new Applicant('Maria', 'Moskalenko', 'Kharkiv', interests = ['Applied Arts', 'Engineering'])

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

//Find a match between an applicant's interests and subjects taught/trained in institutions
function matchInternship(applicant, institution) {
    this.applicant = applicant
    this.institution = institution
    var matchingSubjects = []

    applicant.interests.forEach((el1) => institution.subjects.name.forEach((el2) => { if(el1 == el2) { matchingSubjects.push(el1) } }))

    console.log(applicant.name + ', ' + 'The following subjects in ' + institution.name + ' ' + 'might be interesting to you: ' + matchingSubjects)
}

//Applications
olga.applyToInternship(schoolOfArt)
olga.applyToInternship(technicalCollege)
elena.applyToInternship(schoolOfArt)
elena.applyToInternship(nasa)
elena.applyToInternship(technicalCollege)
daniel.applyToInternship(nasa)
maria.applyToInternship(schoolOfArt)
maria.applyToInternship(technicalCollege)