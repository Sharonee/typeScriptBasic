// Exercise 1 - How was your TypeScript Class?
function Car1(name) {
    this.name = name;
    this.acceleration = 0;
 
    this.honk = function() {
        console.log("Toooooooooot!");
    };
 
    this.accelerate = function(speed) {
        this.acceleration = this.acceleration + speed;
    }
}
var car1 = new Car1("BMW");
car1.honk();
console.log(car1.acceleration);
car1.accelerate(10);
console.log(car1.acceleration);