const { Circle, Triangle, Square } = require('./shapes');

describe ('shapes', function () {
    it('should pass when the user choses a circle', function () {
        const shapes = new Circle();
        expect(shapes.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />')
    })
})