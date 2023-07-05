// import modules
const inquirer = require('inquirer');
const fs = require('fs');

// questions for user to input data to generate logo
const promptUser = () => {
    return inquirer.prompt([
      {
        type: "input",
        name: "text",
        message: "Enter up to three characters for the logo text:",
        validate: (input) => {
          if (input.length <= 3) {
            return true;
          } else {
            return "Please enter up to three characters.";
          }
        },
      },
      {
        type: "input",
        name: "textColor",
        message: "Enter the text color (color keyword or hexadecimal number):",
      },
      {
        type: "list",
        name: "shape",
        message: "Select a shape for the logo:",
        choices: ["circle", "triangle", "square"],
      },
      {
        type: "input",
        name: "shapeColor",
        message: "Enter the shape color (color keyword or hexadecimal number):",
      },
    ]);
  };

  promptUser();