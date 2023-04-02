class Shape {
    constructor() {
        this.name = "Shape";
    }
    getArea() {
        return 0;
    }
    toString() {
        return `[${this.name}]`;
    }
    valueOf() {
        return this.getArea();
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.name = "Shape rectangle";
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}

class Square extends Rectangle {
    constructor(sideLength) {
        super(sideLength, sideLength);
        this.name = "Shape square";
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.name = "Shape circle";
        this.radius = radius;
    }
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

const square = new Square(10);
console.log(square.getArea()); // 100

const rectangle = new Rectangle(5, 10);
console.log(rectangle.getArea()) // 50

const circle = new Circle(2);
console.log(circle.getArea()); // 12.566370614359172

console.log(`${rectangle} ${square} ${circle}`) // [Shape rectangle] [Shape square] [Shape circle]
console.log(rectangle + square - circle) // 137.4336293856408
