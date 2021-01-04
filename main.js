"use strict";
var myName;
myName = "Banana";
// myName = 35; //(이미 myName에 string이 할당되었기 때문에 이후에 number 할당 불가)
var myAge = 25;
// myAge = '35';
var isHeCome = false;
// isHeCome = "Jupeter";
var hisBag; // 이렇게 선언된경우 이후에 어떤 데이터 타입이라도 다 들어갈 수 있다.
hisBag = 35;
hisBag = "Name";
// 하지만 ts는 이렇게 선언하는것을 권장
var secondName = "Apple";
var yourAge = 35;
var yourBag;
// let heroes = ["Superman", "Hulk", "Batman"]; -> 오직 배열 안에 문자열만 들어갈 수 있다.
// let heroes: any = ["Superman", "Hulk", "Batman"]; -> 배열이든 아니든 모든 값이 다 들어갈 수 있다.
// let heroes: any[] = ["Superman", "Hulk", "Batman"]; -> heroes에 배열만 할당할 수 있다.
var heroes = ["Superman", "Hulk", "Batman"]; // 모든 값을 다 할당할 수 있다.
heroes = 50;
// Tuple
var classB = ["Students", 20];
classB = ["Teachers", 10];
console.log(classB[0]);
// enum
var Color;
(function (Color) {
    Color[Color["Blue"] = 0] = "Blue";
    Color[Color["Green"] = 10] = "Green";
    Color[Color["Red"] = 11] = "Red";
})(Color || (Color = {}));
var color1 = Color.Green;
console.log(Color.Blue);
// any
// any를 쓰면 TS를 쓰는 의미가 없어짐. 웬만하면 안쓴다.
var batmanCar = "K5";
console.log(batmanCar);
batmanCar = { maker: "KIA", manufactured: 2017 };
console.log(batmanCar);
// function return type
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// function argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 5));
// Function Types
var superMultiply;
superMultiply = multiply;
var resultMultiply = multiply(4, 6);
// superMultiply = returnMyName;
console.log(resultMultiply);
console.log(superMultiply);
console.log(superMultiply(2, 20));
