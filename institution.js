module.exports = class Institution {
    constructor(name, location) {
        this.name = name;
        this.location = location;
        this.subjects = [];
        this.applicants = [];
    }   
}