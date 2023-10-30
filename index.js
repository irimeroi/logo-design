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
        // validate: (text) => {
        //     text.length <= 3 ||
        //     "The message must not contain more than 3 characters"
        // }
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
        name: 'shapesColor'
    }
]

function generateSVG(answers) {
    let shapeChoice = "";
    if (answers.shapes === "Circle") {
        shapeChoice = new Circle(answers.color, answers.text, answers.textColor);
    } else if (answers.shapes === "Triangle") {
        shapeChoice = new Triangle(answers.color, answers.text, answers.textColor);
    } else if (answers.shapes === "Square") {
        shapeChoice = new Square(answers.color, answers.text, answers.textColor);
    }
    return shapeChoice.render();
}

function app() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            fs.writeFile('logo.svg', generateSVG(answers), function (error) {
                if (error) { console.log(error) }
                console.log('Success! Your logo was created!')
            })
        })
}

app();