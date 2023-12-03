// Import required packages
const inquirer = require('inquirer');
const fs = require('fs');


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
})



// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered


//****** DONE ******
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)