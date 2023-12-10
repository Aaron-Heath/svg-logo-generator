// Import required packages
const inquirer = require('inquirer');
const fs = require('fs');
const Triangle = require("./lib/triangle");
const Circle = require('./lib/circle');
const Square = require('./lib/square');


// GIVEN a command-line application that accepts user input
inquirer.prompt([
    {
        type: 'input',
        message: 'What characters should be in the logo? (Limit 3): ',
        name: 'text',
        // Validate text input is <= 3 characters
        validate: function(input) {
            const done = this.async();

            input.length > 3 ? done('Input must be less than 3')  : done(null,true);
        }
    },
    {
        type: 'input',
        message: 'Enter a color for the characters (keyword or hexadecimal accepted): ',
        name: 'textColor'
        // Validate hexadeximal input
        // validate: function(input) {
        //     const done = this.async();
        //     let result = true;

        //     if(input.startsWith("#")){
        //         const reg = /^#[0-9A-F]{6}$/i;
        //         //https://stackoverflow.com/questions/8027423/how-to-check-if-a-string-is-a-valid-hex-color-representation
        //         result = reg.test(input);
        //     }
            
        // }
    },
    {
        type: 'list',
        message: 'Choose your logo shape: ',
        name: 'shape',
        choices: [
            'Circle',
            'Square',
            'Triangle'
        ]
    },
    {
        type: 'input',
        message: 'Enter a color for the shape (keyword or hexadecimal accepted): ',
        name: 'shapeColor'
    }

])
.then((input)=> {
    console.log(input);
    const shapes = {
        Square: Square,
        Circle: Circle,
        Triangle: Triangle
    };

    // Create shape from input
    const logoShape = new shapes[input.shape](input.shapeColor);
    const shapeString = 
`<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">

 <rect width="100%" height="100%" fill="white" />

 ${logoShape.render()}

 <text x="150" y="125" font-size="50" text-anchor="middle" fill="${input.textColor}">${input.text}</text>

</svg>`;


    fs.writeFile('./logo.svg',shapeString, (err) => err ? console.log(err) : console.log("Logo Created."));
});