const Manager = require("../lib/Manager");

test("Can instantiate Manager instance", () => {
    const emp = new Manager();
    expect(typeof(emp)).toBe("object");
})

test("Can set manager name using constructor", () => {
    const name = "Jennifer";
    const emp = new Manager(name);
    expect(emp.name).toBe(name);
})

test("Can set manager id using Manager constructor", () => {
    const id = 222;
    const emp = new Manager("Jennifer", 222);
    expect(emp.id).toBe(id);
})

test("Can set manager email using Manager constructor", () => {
    const email = "jennifermalaga@gmail.com";
    const emp = new Manager("Jennifer", 222, email);
    expect(emp.email).toBe(email);
})

test("Can set manager office number using Manager constructor", () => {
    const officeNumber = 8016561465;
    const emp = new Manager("Jennifer", 222, "jennifermalaga@gmail.com", officeNumber);
    expect(emp.officeNumber).toBe(officeNumber);
})

test("Can set manager role using Manager constructor", () => {
    const role = "Manager";
    const emp = new Manager("Jennifer", 222, "jennifermalaga@gmail.com", 8016561465, role);
    expect(emp.role).toBe(role);
})