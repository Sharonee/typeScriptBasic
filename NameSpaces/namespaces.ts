namespace MyMath{
    const PI = 3.14;

    export function calculateCircumferemce(diameter:number){
        return diameter * PI;
    }

    export function calculateRectangle(width: number, lenght: number){
        return width*lenght;
    }
}

console.log(MyMath.calculateCircumferemce(10));
console.log(MyMath.calculateRectangle(10,20));


