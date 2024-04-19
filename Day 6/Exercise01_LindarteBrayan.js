class Person {
    constructor(name,age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    displayDetails() {
        const { name, age, country} = this;
        console.log(`Name: ${name}, Age:${age}, Country: ${country}`);
    }
}

const person1 = new Person("Felipino", 28, "Peru");
const person2 = new Person("Meringa", 43, "UK");

person1.displayDetails();
person2.displayDetails();