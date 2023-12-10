const Shape = require('./shape');

class Square extends Shape {
    #color;
    #renderTemplate;
    #shape;
    #validShapes = {
        square: 'rect',
        circle: 'circle',
        triangle: 'polygon'
    };
    
    constructor(color) {
        super(color, 'square');
    }
}

module.exports = Square;