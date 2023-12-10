const Shape = require('./shape');

class Triangle extends Shape {
    #color;
    #renderTemplate;
    #shape;
    #validShapes = {
        square: 'rect',
        circle: 'circle',
        triangle: 'polygon'
    };
    
    constructor(color) {
        super(color, 'triangle');
    }
}

module.exports = Triangle;