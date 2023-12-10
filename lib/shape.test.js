const Triangle = require('./triangle');
const Circle = require('./circle');
const Square = require('./square');

// Create testing suite for Triangle
describe('Triangle', ()=> {
    //Test to check Triangle return statement'
    describe('render',() => {
        it('should take a color and return an svg triangle of that color', () => {
            const shape = new Triangle('blue');
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    })
});

// Testing Suite for Circle
describe('Circle', ()=> {
    describe('render', () => {
        it('should take a color and return an svg circle of that color', () => {
            const shape = new Circle('blue');
            expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="100" fill="blue" />`)
            
        })
    })

});

// Testing Suite for Square
describe('Square', ()=> {
    describe('render', () => {
        it('should take a color and return an svg square of that color', () => {
            const shape = new Square('blue');
            expect(shape.render()).toEqual(`<rect x="50" y="50" width="200" height="200" fill="blue" />`)
            
        })
    })

});

