const Circle = require("./shapes.js").Circle;
const Square = require("./shapes.js").Square;
const Triangle = require("./shapes.js").Triangle;

describe("Triangle", () => {
  it("renders a blue triangle", () => {
    const triangle = new Triangle();
    triangle.setColor("blue");
    expect(triangle.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue" />`);
  });
});

describe("Square", () => {
  it("renders a red square", () => {
    const square = new Square();
    square.setColor("red");
    expect(square.render()).toEqual(`<rect x="50" y="0" width="200" height="200" fill="red" />`);
});
});

describe("Circle", () => {
  it("renders a blue circle", () => {
    const circle = new Circle();
    circle.setColor("blue");
    expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="100" fill="blue" />`);
  });
});