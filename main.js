"use strict";
var bankAccount = {
    money: 0,
    deposit: function (value) {
        this.money += value;
    }
};
var user_1 = {
    name: "Superman",
    bankAccount: bankAccount,
    hobbies: ["Flying", "Guitar"]
};
var user_2 = {
    name: "Batman",
    bankAccount: bankAccount,
    hobbies: ["Flying", "Guitar"]
};
var user_3 = {
    name: "Hulk",
    bankAccount: bankAccount,
    hobbies: ["halloween Party", "Climbing a building"]
};
user_1.bankAccount.deposit(1500);
user_2.bankAccount.deposit(500);
user_3.bankAccount.deposit(2500);
user_1.bankAccount.deposit(3500);
var totalBalance = bankAccount.money;
console.log(totalBalance);
