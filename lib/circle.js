const Shape = require('./shape');

class Circle extends Shape {
    #color;
    #renderTemplate;
    #shape;
    #validShapes = {
        square: 'rect',
        circle: 'circle',
        triangle: 'polygon'
    };
    
    constructor(color) {
        super(color, 'circle');
    }
}

module.exports = Circle;