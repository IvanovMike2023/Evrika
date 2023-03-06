class Animal {

    constructor(name,type) {
        this.name = name;
        this.type = type;
    }

    toString() {
        console.log(`${this.name} is a ${this.type}`);
        return `${this.Max} "is a dog" ${this.name}`
    }

}

// Использование:
let dog = new Animal('Sat','cat');
dog.toString();//образится: "Rectangle