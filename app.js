"use strict";
//String
var myName = 'Max';
//Number
var myAge = 27;
//boolean
var hasHobbies = false;
//assing types
var myRealage;
myRealage = 27;
myRealage = '27';
var myRealage2;
myRealage2 = 37;
//Array of string
var hobbies = ["cooking", "Sport"];
console.log(typeof hobbies);
console.log(hobbies[0]);
//Array of any
var hobbies2 = ["cooking2", "Sport2"];
hobbies2 = [100];
console.log(typeof hobbies);
console.log(hobbies[0]);
//tuples (array with mix type)
var address = ["telaviv", 99]; //order is inportent
//Emun 
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; //2
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor); // will print 1
//any
var car = "BMW";
console.log(car);
car = { brand: "BMW", model: 1988 };
console.log(car);
//------------------------------------------------------------------------------------
//Functions
function returnMyMame() {
    return myName;
}
console.log(returnMyMame());
//void
function sayHello() {
    console.log("Hello");
}
//arguments type
function multiply(value1, value2) {
    return value1 * value2;
}
//function type
var myMultiply; //able to defind which type of function may hold
myMultiply = multiply;
console.log(myMultiply(5, 10));
//Objects
//In objects the order my be change
var userData = {
    name: "bebe",
    age: 60
};
//complex object
var complex = {
    data: [100, 2, 5],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 2, 5],
    output: function (all) {
        return this.data;
    }
};
//union types
var myRealRealAge = 24; //Number or String
myRealRealAge = "27";
myRealRealAge = 27;
// check types
var finalValue = 30;
if (typeof finalValue == "number") {
    console.log("the type is number");
}
//Nullable types
var canBeNull = 12;
canBeNull = null;
var alsoCanBeNull;
alsoCanBeNull = null;
//# sourceMappingURL=app.js.map