class Shape {
    // Private attributes 
    #color;
    #renderTemplate;
    #shape;
    #validShapes = {
        square: 'rect',
        circle: 'circle',
        triangle: 'polygon'
    };
    constructor(color, shape) {
        this.#color = color;
        this.#shape = shape;
        switch (shape.toLowerCase()) {
            case 'square':
                this.#renderTemplate = `<${this.#validShapes.square} x="50" y="50" width="200" height="200" fill="${this.#color}" />`;
                break;
            case 'circle':
                this.#renderTemplate = `<${this.#validShapes.circle} cx="150" cy="100" r="100" fill="${this.#color}" />`;
                break;
            case 'triangle':
                this.#renderTemplate = `<${this.#validShapes.triangle} points="150, 18 244, 182 56, 182" fill="${this.#color}" />`;
                break;
        }
    }

    setColor(color) {
        this.#color = color;
    }

    setShape(newShape) {
        //validate new shape
        if(!this.#validShapes.keys.includes(newShape)) {
            throw new Error('Invalid shape. Must be cirlce, square, or triangle');
        }

        this.#shape = this.#validShapes[newShape];

    }

    // Render shape with svg parameters
    render() {
        return this.#renderTemplate;
    }
}

module.exports = Shape;