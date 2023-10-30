class Shapes {
    constructor () {
        this.color = "";
        this.text = "";
        this.textColor = "";
    }
    setColor(color) {
        this.color = color;
    }

    setText(text) {
        this.text = text;
    }

    setTextColor(textColor) {
        this.textcolor = textColor;
    }
}

//circle, triangle and square classes that inherits the properties of the 'Shapes' class
class Circle extends Shapes {
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.color}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`
    }
}

class Triangle extends Shapes {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
    }
}

class Square extends Shapes {
    constructor () {}
    render() {
        return `<rect x="10" y="10" width="30" height="30" fill="${this.color}"/>`
    }
}

module.exports = { Shapes, Circle, Triangle, Square}