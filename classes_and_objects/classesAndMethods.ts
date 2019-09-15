class Person {
    name: string;
    private type: string = "type";
    protected age: number =27; 

    constructor(name:string, public username:string){
        this.name = name;
    }

    printAge(){
        console.log("Print the age" + this.age);
        // this.setType("new Type");
    }
    private setType(type:string){
        this.type = type;
        console.log(this.type);

    }
}
const person = new Person("Sharon", "sharon");
console.log(person);
person.printAge;  // todo - ask why doesnt print the age





//// Inheritance
class Max extends Person{
    constructor(){
        super("max", "max user name");
        this.age = 31;
    }

}
const max = new Max();
console.log(max);


//Getters and Setters

class Plant{
    private _species: string = "Default";

    get species(){
        return this._species;
    }

    set species(value: string){
        if(value.length > 3){
        this._species = value;
        }
        else {
            this._species = "Default";
        }

    }
}

let plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "Green plant"
console.log(plant.species);

//Statics methods

class Helpers{
    static PI: number = 3.14;
    static calcCircumfernence(diameter:number) : number{
        return this.PI * diameter;
    }
}

console.log(Helpers.PI);
console.log(Helpers.calcCircumfernence(5));


//Abstract Classes - not for inheritance

abstract class project{

     projectName: string = "Default Project Name";
     budget: number;

     abstract changeName(name:string): void;  // only for inheritance so here do nothing
 
     caclBudget(){
         return this.budget * 2;
     }
}

class ITProject extends project{  // Need to implement chageName method

     changeName(name:string):void{
         this.projectName = name;
     }
}

let newProject = new ITProject();
console.log(newProject.projectName);
newProject.changeName("New Project name 2");
console.log(newProject.projectName);












