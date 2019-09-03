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

function returnMyMame():string {
    return myName;
}
console.log(returnMyMame());


//void
function sayHello():void{
    console.log("Hello");
}



//arguments type

function multiply(value1:number, value2:number) :number{
    return value1*value2;
}

//function type
let myMultiply: (a:number, b:number) => number;    //able to defind which type of function may hold
myMultiply = multiply;
console.log(myMultiply(5,10));


//Objects
//In objects the order my be change

let userData: {name: string, age: number} ={
    name: "bebe",
    age: 60
}

//complex object
let complex: {data:number[], output:(all:boolean) => number[]} ={
    data:[100,2,5],
    output: function (all:boolean): number[]{
        return this.data;
    }
}

//type alias

type Complex = {data:number[], output:(all:boolean) => number[]};

let complex2: Complex ={
    data:[100,2,5],
    output: function (all:boolean): number[]{
        return this.data;
    }
}

//union types
let myRealRealAge: number | string = 24;  //Number or String
myRealRealAge = "27";
myRealRealAge = 27;


// check types

let finalValue = 30;
if (typeof finalValue == "number"){
    console.log("the type is number");
}


//Nullable types

let canBeNull: number | null = 12;
canBeNull = null;

let alsoCanBeNull;
alsoCanBeNull = null;





