// import shapes from shapes.js
const { Triangle, Circle, Square } = require("./shapes");

// testing all shape classes
describe("Triangle", () => {
    test("renders a triangle SVG string with the provided color", () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
      );
    });
  });
  
  describe("Circle", () => {
    test("renders a circle SVG string with the provided color", () => {
      const shape = new Circle();
      shape.setColor("red");
      expect(shape.render()).toEqual(
        '<circle cx="150" cy="100" r="80" fill="red" />'
      );
    });
  });
  
  describe("Square", () => {
    test("renders a square SVG string with the provided color", () => {
      const shape = new Square();
      shape.setColor("green");
      expect(shape.render()).toEqual(
        '<rect x="50" y="50" width="200" height="200" fill="green" />'
      );
    });
  });