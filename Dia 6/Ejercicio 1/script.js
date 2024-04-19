class Person {
    constructor(name, age, country) {
      this.name = name;
      this.age = age;
      this.country = country;
    }
  
    displayDetails() {
      console.log(`Name: ${this.name}, Age: ${this.age}, Country: ${this.country}`);
    }
  }
  
  const person1 = new Person("Juan", 30, "España");
  const person2 = new Person("Maria", 25, "México");
  
  person1.displayDetails();
  person2.displayDetails();
  
