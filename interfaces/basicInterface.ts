interface NamePerson {
    firstNams: string;
    age? : number;
    [propName:string] : any;
    // greett(lastName: string) :void;
}


function greett(person: NamePerson){
    console.log("Hello, " + person.firstNams);
}

const person1:NamePerson ={
    firstNams: "Max",
    age:30,
    propName:"prop"
}



greett(person1);