class Shape {
    
    calculateArea() {
      return "";
    }
  }
  
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    calculateArea() {
      return Math.PI * this.radius ** 2;
    }
  }
  
  
  class Triangle extends Shape {
    constructor(base, height) {
      super();
      this.base = base;
      this.height = height;
    }
  
    
    calculateArea() {
      return 0.5 * this.base * this.height;
    }
  }
  
  
  const circle = new Circle(5);
  const circleArea = circle.calculateArea();
  console.log(`Area del circulo: ${circleArea}`);
  
  
  const triangle = new Triangle(10, 8);
  const triangleArea = triangle.calculateArea();
  console.log(`Area del triangulo: ${triangleArea}`);