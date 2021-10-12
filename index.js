const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const render = require("./src/team");
const { ChildProcess } = require("child_process");
const team = [];

// Retrieve Users Input
const begin = [
    {
        type: "input",
        name: "name",
        validate: userName => {
            if (userName) {
                return true;
            } else {
                console.log("Must enter a name!")
                return false;
            }
        }
    },

    {
        type: "input",
        message: "Please enter the team Manager's Employee ID: ",
        name: "id",
        validate: userId => {
            if (userId) {
                return true;
            } else {
                console.log("Must enter an id!");
                return false;
            }
        }
    },

    {
        type: "input",
        message: "Please enter the team Manager's email address: ",
        name: "email",
        validate: userEmail => {
            if (userEmail) {
                return true;
            } else {
                console.log("Must enter an email address!");
                return false;
            }
        }
    },

    
    {
        type: "input",
        message: "Please enter the teams manager's office number: ",
        name: "officeNumber",
        validate: userNumber => {
            if (userNumber) {
                return true;
            } else {
                console.log("Must enter an office number");
                return false;
            }
        }
    },
];

//PUSHING TEAM MANAGER IN THE TEAM ARRAY
questions().then(function({name, id, email, officeNumber}) {
    let teamManager;
    teamManager = new Manager(name, id, email, officeNumber);
    team.push(teamManager);
    choice();
});

//Call First Prompt
function questions() {
    return inquirer.prompt(begin);
}

// PROMPT THAT DECIDES ROLE TO NAV
const choice = () => {
    inquirer    
        .prompt([
                {
                    type: "list",
                    message: "Which team member would you like to add?",
                    name: "role",
                    choices: ["Engineer", "Intern", "No more team members"],
                }
        ]).then(data => {
            if(data.role === "Engineer") {
                engineerInfo();
            } else if(data.role === "Intern") {
                internInfo();
            } else if(data.role === "No more team members") {
                noMore();
            }
        })
};

//PROMPTING ENGINEERS INFO
const engineerInfo = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Please enter the name of the engineer: ",
                name: "name",
                validate: userName => {
                    if (userName) {
                        return true;
                    } else {
                        console.log("Must enter a name!")
                        return false;
                    }
                }
            },

            {
                type: "input",
                message: "Please enter the engineer's employee id: ",
                name: "id",
                validate: userId => {
                    if (userId) {
                        return true;
                    } else {
                        console.log("Must enter an id!")
                        return false;
                    }
                }
            },

            {
                type: "input",
                message: "Please enter engineer's email address: ",
                name: "email",
                validate: userEmail => {
                    if (userEmail) {
                        return true;
                    } else {
                        console.log("Must enter email address!")
                        return false;
                    }
                }
            },

            {
                type: "input",
                message: "Please enter the engineer's GitHub Username: ",
                name: "github",
                validate: userGithub => {
                    if (userGithub) {
                        return true;
                    } else {
                        console.log("Must enter Github username!")
                        return false;
                    }
                }
            },
        ]).then(function({name, id, email, github}) {
            let teamEngineer;
            teamEngineer = new Engineer(name, id, email, github);
            team.push(teamEngineer);
            choice();
        });
}

//PROMPTING INTERN INFO
const internInfo = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Please enter the name of the intern: ",
                name: "name",
                validate: userName => {
                    if (userName) {
                        return true;
                    } else {
                        console.log("Must enter a name!")
                        return false;
                    }
                }
            },

            {
                type: "input",
                message: "Please enter the intern's employee id: ",
                name: "id",
                validate: userId => {
                    if (userId) {
                        return true;
                    } else {
                        console.log("Must enter an id!")
                        return false;
                    }
                }
            },

            {
                type: "input",
                message: "Please enter intern's email address: ",
                name: "email",
                validate: userEmail => {
                    if (userEmail) {
                        return true;
                    } else {
                        console.log("Must enter email address!")
                        return false;
                    }
                }
            },

            {
                type: "input",
                message: "Please enter the intern's GitHub Username: ",
                name: "github",
                validate: userGithub => {
                    if (userGithub) {
                        return true;
                    } else {
                        console.log("Must enter Github username!")
                        return false;
                    }
                }
            },
        ]).then(function({name, id, email, github}) {
            let teamIntern;
            teamIntern = new Intern(name, id, email, github);
            team.push(teamIntern);
            choice();
        });
}