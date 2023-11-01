const { Circle, Triangle, Square } = require('./shapes');

describe ('shapes', function () {
    it('should pass when the user choses a circle', function () {
        const shapes = new Circle();
        expect(shapes.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.color}" />
        <text x="150" y="125" font-size="80" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`)
    })

    it('should pass when the user choses a triangle', function () {
        const shapes = new Triangle();
        expect(shapes.render()).toEqual(` <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>
        <text x="150" y="160" font-size="80" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`)
    })

    it('should pass when the user choses a square', function () {
        const shapes = new Square();
        expect(shapes.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="${this.color}"/>
        <text x="100" y="125" font-size="85" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`)
    })
})

