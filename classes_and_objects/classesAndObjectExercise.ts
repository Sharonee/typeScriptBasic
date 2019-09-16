// How was your TypeScript Class?
function CarNew(name) {
    this.name = name;
    this.acceleration = 0;
 
    this.honk = function() {
        console.log("Toooooooooot!");
    };
 
    this.accelerate = function(speed) {
        this.acceleration = this.acceleration + speed;
    }
}
var carnew = new CarNew("BMW");
carnew.honk();
console.log(carnew.acceleration);
carnew.accelerate(10);
console.log(carnew.acceleration);