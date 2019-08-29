//String
let myName = 'Max';
 
//Number
let myAge = 27;

//boolean
let hasHobbies = false;

//assing types
let myRealage
myRealage = 27;
myRealage = '27';

let myRealage2: number;
myRealage2 = 37;

//Array of string
let hobbies = ["cooking", "Sport"];
console.log(typeof hobbies);
console.log(hobbies[0]);

//Array of any
let hobbies2: any[] = ["cooking2", "Sport2"];
hobbies2 = [100];
console.log(typeof hobbies);
console.log(hobbies[0]);

//tuples (array with mix type)
let address : [string, number ] =  ["telaviv", 99];   //order is inportent

//Emun 

enum Color{
    Gray,  //0
    Green,  //1
    Blue   //2
}

let myColor: Color = Color.Green;
console.log(myColor);  // will print 1



//any

let car: any = "BMW";
console.log(car);
car = { brand: "BMW", model: 1988};
console.log(car);

//------------------------------------------------------------------------------------

//Functions







