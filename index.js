// Packages needed for the application to run
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');
const fs = require('fs');

//Array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Please enter text for your logo. (Must not exceed 3 characters)',
        name: 'text',
        validate: (answer) => {
            if (answer.length > 3) {
                return console.log("Please delete some characters!");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Enter text color',
        name: 'textColor'
    }, {
        type: 'list',
        message: 'Select a shape for your logo',
        choices: ['Circle', 'Square', 'Triangle'],
        name: 'shapes'
    }, {
        type: 'input',
        message: 'Enter a shape color',
        name: 'shapeColor'
    }
]

//function that generates de SVG logo
function generateSVG(answers) {
    let shapeChoice = "";
    if (answers.shapes === "Circle") {
        shapeChoice = new Circle(answers.shapeColor, answers.text, answers.textColor);
    } else if (answers.shapes === "Triangle") {
        shapeChoice = new Triangle(answers.shapeColor, answers.text, answers.textColor);
    } else if (answers.shapes === "Square") {
        shapeChoice = new Square(answers.shapeColor, answers.text, answers.textColor);
    }
    return shapeChoice.render();
}

//function that starts the app and creates the file printing the SVG logo
function app() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            fs.writeFile('examples/logo.svg', generateSVG(answers), function (error) {
                if (error) { console.log(error) }
                console.log('Success! Your logo was created!')
            })
        })
}

app();