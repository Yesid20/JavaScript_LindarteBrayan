class Vehicle {
    constructor({make, model, year}) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayDetails() {
        const  { make, model, year} = this;
        console.log(`Make: ${make}, Model: ${model}, Year: ${year}`)
    }
}

class Car extends Vehicle {
    constructor({ make, model, year, numDoors}) {
        super({ make, model, year});
        this.numDoors = numDoors;
    }

    displayDetails() {
        super.displayDetails();
        const { numDoors } = this;
        console.log(`Number of doors: ${numDoors}`);
    }
}

const myCar = new Car({ make: "Chevrolet", model: "Beat", year: 2019, numDoors: 4});
myCar.displayDetails();
