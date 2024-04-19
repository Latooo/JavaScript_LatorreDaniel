class Vehicle {

        constructor(make, model, year){
        this.make = make
        this.model = model
        this.year = year
        }
    
        display() {
            console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
        }
}

class Car extends Vehicle{
    constructor(make, model, year, doors){
        super(make, model, year)
        this.doors = doors
    }

    display(){
        super.display()
        console.log(`Doors: ${this.doors}`)
    }
}

const myCar = new Car("Nissan","Skyline",2003,4)

myCar.display()