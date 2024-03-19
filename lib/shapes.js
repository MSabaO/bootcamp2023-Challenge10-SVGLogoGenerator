class Shape {
  constructor(color, textColor, text) {
    this.color = color;
    this.textColor = textColor;
    this.text = text;
    this.setColor = function (newColor) {
      if (newColor) {
        this.color = newColor;
      }
      return this.color;
    };
  }
  renderSvg() {
    return `
    <svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    ${this.render()}${this.renderText()}</svg>
    `;
  }
  renderText() {
    if (this instanceof Triangle) {
      return `
    <text x="50%" y="70%" text-anchor="middle" dominant-baseline="middle" font-size="50" fill="${this.textColor}">
    ${this.text}</text>
    `;
    } else {
      return `
    <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="50" fill="${this.textColor}">
    ${this.text}</text>
    `;
    }
  }
}

class Circle extends Shape {
  constructor(color, textColor, text, setColor) {
    super(color, textColor, text, setColor);
    this.color = color;
    this.textColor = textColor;
    this.text = text;
  }
  render() {
    return `<circle cx="150" cy="100" r="100" fill="${this.setColor()}" />`;
  }
}

class Triangle extends Shape {
  constructor(color, textColor, text) {
    super(color, textColor, text);
    this.color = color;
    this.textColor = textColor;
    this.text = text;
  }

  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.setColor()}" />`;
  }
}

class Square extends Shape {
  constructor(color, textColor, text) {
    super(color, textColor, text);
    this.color = color;
    this.textColor = textColor;
    this.text = text;
  }

  render() {
    return `<rect x="50" y="0" width="200" height="200" fill="${this.setColor()}" />`;
  }
}

module.exports = {
  Shape,
  Circle,
  Triangle,
  Square,
};
