class Rectangle{
    constructor(width, height){
        this.width = width
        this.height = height
    }

    area(){
        return this.width * this.height
    }
    
    perimetro(){
        return 2*(this.width + this.height)
    }

}

const rectangle = new Rectangle(3,7);

const area = rectangle.area();
const perimetro = rectangle.perimetro();

console.log(`El area del rectangulo es ${area}`)
console.log(`El perimetro del rectangulo es ${perimetro}`)