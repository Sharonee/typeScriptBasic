"use strict";
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "sharon",
    bankAccount: bankAccount,
    hobbies: ["sport", "cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
//# sourceMappingURL=types.js.map