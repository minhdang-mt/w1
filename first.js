class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return `${this.name} makes a noise.`;
    }
}

class Dog extends Animal {
    speak() {
        return `${this.name} barks.`;
    }
}

class Cat extends Animal {
    speak() {
        return `${this.name} meows.`;
    }
}

let animals = [new Dog('Buddy'), new Cat('Whiskers')];

// Demonstrating polymorphism: calling speak() on different objects
animals.forEach(animal => {
    console.log(animal.speak());
});
