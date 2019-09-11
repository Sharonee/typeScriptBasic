// Let & Const
let variable = "Test";
console.log(variable);
variable = "Another varible";
console.log(variable);


//Block Scope
function reset(){
    //console.log(variable);  // cannot access to this variable its out this function
    let variable = null;
    console.log(variable);
}

reset();
console.log(variable);


//Arrow functions
console.log("ARROW FUNCTIONS")

const addNumber = function(number1: number, number2: number){
    return number1 * number2;
}
console.log(addNumber(30,50));

//Arrow
const addNumberArrow = (number1:number, number2:number) => number1 * number2;
console.log("Arrow   =>    " + addNumberArrow(50,50));

//Arrow function variable:

const HelloFriend = friend => console.log(friend);
HelloFriend("Moshe");


//Default parametes
console.log("DEFAULT PARAMETERS");

const countDown = (start:number = 10): void =>{   //See the default parameter is 10
    console.log(start);
    while(start >0){
        start--;
    }
    console.log("Done !!  " + start);
} 
countDown();   //Whithout parameters, the default is 10

//Rest & Spread
console.log("REST AND SPREAD");

const Mynumbers = [1,46,53,90];
console.log(Math.max(...Mynumbers)); //spread the array of Mynumber



//Destructuring
console.log("Destructuring");

const myHobbies = ["coocking" , "sport"];
// const Hobby1 = "Coocking";
// const Hobby2 = "sport";
//Instead of this:
const [Hobby1,Hobby2] = myHobbies;
console.log(Hobby1,Hobby2);

//And now for object

const userData2 = {Myname:"max", age: 27};
const {Myname, age} = userData2;
console.log(Myname,age);




