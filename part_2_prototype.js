function Shape() {
}

Shape.prototype.valueOf = function () {
    return this.getArea();
}

Shape.prototype.toString = function () {
    return "[Shape]";
};

Shape.prototype.getArea = function () {
    return 0;
};

function Square(side) {
    Shape.call(this);
    this.side = side;
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;
Square.prototype.toString = function () {
    return "[Shape square]";
}

Square.prototype.getArea = function () {
    return this.side ** 2;
};

function Rectangle(width, height) {
    Shape.call(this);
    this.width = width;
    this.height = height;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.toString = function () {
    return "[Shape rectangle]";
};

Rectangle.prototype.getArea = function () {
    return this.width * this.height;
};

function Circle(radius) {
    Shape.call(this);
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.toString = function () {
    return "[Shape circle]";
};

Circle.prototype.getArea = function () {
    return Math.PI * this.radius ** 2;
};

const square = new Square(10);
console.log(square.getArea()); // 100

const rectangle = new Rectangle(5, 10);
console.log(rectangle.getArea()) // 50

const circle = new Circle(2);
console.log(circle.getArea()); // 12.566370614359172

console.log(`${rectangle} ${square} ${circle}`) // [Shape rectangle] [Shape square] [Shape circle]
console.log(rectangle + square - circle) // 137.4336293856408
