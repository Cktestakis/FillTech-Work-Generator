const Employee = require("../lib/Employee");
// INTERN CLASS
class Intern extends Employee {
    constructor(name, id, email, school, role) {
        super(name, id,email)
        this.school = school;
        this.role = role;
    };

    getSchool() {
        return this.school;
    };

    getRole() {
        return 'Intern';
    };
};

module.exports = Intern;