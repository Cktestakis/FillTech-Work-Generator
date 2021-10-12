const Intern = require("../lib/Intern");

test("Can instantiate intern instance", () => {
    const emp = new Intern();
    expect(typeof(emp)).toBe("object");
})

test("Can set intern name using constructor", () => {
    const name = "Jennifer";
    const emp = new Intern(name);
    expect(emp.name).toBe(name);
})

test("Can set intern id using Intern constructor", () => {
    const id = 222;
    const emp = new Intern("Jennifer", 222);
    expect(emp.id).toBe(id);
})

test("Can set intern email using Intern constructor", () => {
    const email = "jennifermalaga@gmail.com";
    const emp = new Intern("Jennifer", 222, email);
    expect(emp.email).toBe(email);
})

test("Can set intern school using Intern constructor", () => {
    const school = "University of Utah";
    const emp = new Intern("Jennifer", 222, "jennifermalaga@gmail.com", school);
    expect(emp.school).toBe(school);
})

test("Can set intern role using Intern constructor", () => {
    const role = "Intern";
    const emp = new Intern("Jennifer", 222, "jennifermalaga@gmail.com", "University of Utah", role);
    expect(emp.role).toBe(role);
})