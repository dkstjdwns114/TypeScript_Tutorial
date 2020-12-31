let myName = "Banana";
// myName = 35; //(이미 myName에 string이 할당되었기 때문에 이후에 number 할당 불가)

let myAge = 25;
// myAge = '35';

let isHeCome = false;
// isHeCome = "Jupeter";

let hisBag; // 이렇게 선언된경우 이후에 어떤 데이터 타입이라도 다 들어갈 수 있다.
hisBag = 35;
hisBag = "Name";

// 하지만 ts는 이렇게 선언하는것을 권장
let secondName: string = "Apple";
let yourAge: number = 35;
let yourBag: any;

let heroes = ["Superman", "Hulk", "Batman"];
