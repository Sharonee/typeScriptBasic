type BankAccount = {money: number, deposit:(value:number) => void};
let bankAccount:BankAccount = {
    money: 2000,
    deposit(value){
        this.money += value;
    }
}

let myself:{name: string, bankAccount:BankAccount, hobbies:string[]} ={
    name: "sharon",
    bankAccount: bankAccount,
    hobbies: ["sport", "cooking"]
}

myself.bankAccount.deposit(3000);
console.log(myself);