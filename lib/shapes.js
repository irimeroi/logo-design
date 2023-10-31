class Shapes {
    constructor (color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
}

//circle, triangle and square classes that inherits the properties of the 'Shapes' class
class Circle extends Shapes {
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.color}" />
        <text x="150" y="125" font-size="80" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`
    }
}

class Triangle extends Shapes {
    render() {
        return ` <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>
        <text x="150" y="160" font-size="80" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}

class Square extends Shapes {
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="${this.color}"/>
        <text x="100" y="125" font-size="85" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`
    }
}

//exports classes to the global scope
module.exports = { Shapes, Circle, Triangle, Square}