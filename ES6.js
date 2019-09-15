// Let & Const
var variable = "Test";
console.log(variable);
variable = "Another varible";
console.log(variable);
//Block Scope
function reset() {
    //console.log(variable);  // cannot access to this variable its out this function
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
//Arrow functions
console.log("ARROW FUNCTIONS");
var addNumber = function (number1, number2) {
    return number1 * number2;
};
console.log(addNumber(30, 50));
//Arrow
var addNumberArrow = function (number1, number2) { return number1 * number2; };
console.log("Arrow   =>    " + addNumberArrow(50, 50));
//Arrow function variable:
var HelloFriend = function (friend) { return console.log(friend); };
HelloFriend("Moshe");
//Default parametes
console.log("DEFAULT PARAMETERS");
var countDown = function (start) {
    if (start === void 0) { start = 10; }
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log("Done !!  " + start);
};
countDown(); //Whithout parameters, the default is 10
//Rest & Spread
console.log("REST AND SPREAD");
var Mynumbers = [1, 46, 53, 90];
console.log(Math.max.apply(Math, Mynumbers)); //spread the array of Mynumber
//Destructuring
console.log("Destructuring");
var myHobbies = ["coocking", "sport"];
// const Hobby1 = "Coocking";
// const Hobby2 = "sport";
//Instead of this:
var Hobby1 = myHobbies[0], Hobby2 = myHobbies[1];
console.log(Hobby1, Hobby2);
//And now for object
var userData2 = { Myname: "max", age: 27 };
var Myname = userData2.Myname, age = userData2.age;
console.log(Myname, age);
//# sourceMappingURL=ES6.js.map