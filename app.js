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
//# sourceMappingURL=app.js.map