type account = {
  money: number;
  deposit(args: number): void;
};
let bankAccount: account = {
  money: 0,
  deposit(value: number): void {
    this.money += value;
  }
};

type User = {
  name: string;
  bankAccount: account;
  hobbies: string[];
};

let user_1: User = {
  name: "Superman",
  bankAccount: bankAccount,
  hobbies: ["Flying", "Guitar"]
};

let user_2: User = {
  name: "Batman",
  bankAccount: bankAccount,
  hobbies: ["Flying", "Guitar"]
};

let user_3: User = {
  name: "Hulk",
  bankAccount: bankAccount,
  hobbies: ["halloween Party", "Climbing a building"]
};

user_1.bankAccount.deposit(1500);
user_2.bankAccount.deposit(500);
user_3.bankAccount.deposit(2500);
user_1.bankAccount.deposit(3500);

let totalBalance: number = bankAccount.money;

console.log(totalBalance);
