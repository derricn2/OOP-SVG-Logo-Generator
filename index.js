// import modules
const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require("./lib/shapes");

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

  const generateLogo = async () => {
    try {
      const { text, textColor, shape, shapeColor } = await promptUser();
  
      let selectedShape;
      switch (shape) {
        case "circle":
          selectedShape = new Circle();
          break;
        case "triangle":
          selectedShape = new Triangle();
          break;
        case "square":
          selectedShape = new Square();
          break;
        default:
          throw new Error("Invalid shape selection.");
      }
  
      selectedShape.setColor(shapeColor);
  
      const svgString = `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
          ${selectedShape.render()}
          <text x="150" y="125" text-anchor="middle" fill="${textColor}" font-size="45">${text}</text>
          </svg>
      `;
  
      fs.writeFileSync("logo.svg", svgString);
  
      console.log("Generated logo.svg");
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  };
  
  generateLogo();