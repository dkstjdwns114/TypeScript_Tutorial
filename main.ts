let myName: string;
myName = "Banana";
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

// let heroes = ["Superman", "Hulk", "Batman"]; -> 오직 배열 안에 문자열만 들어갈 수 있다.
// let heroes: any = ["Superman", "Hulk", "Batman"]; -> 배열이든 아니든 모든 값이 다 들어갈 수 있다.
// let heroes: any[] = ["Superman", "Hulk", "Batman"]; -> heroes에 배열만 할당할 수 있다.
let heroes: any = ["Superman", "Hulk", "Batman"]; // 모든 값을 다 할당할 수 있다.
heroes = 50;

// Tuple
let classB: [string, number] = ["Students", 20];
classB = ["Teachers", 10];
console.log(classB[0]);

// enum
enum Color {
  Blue,
  Green = 10,
  Red
}

let color1 = Color.Green;
console.log(Color.Blue);

// any
// any를 쓰면 TS를 쓰는 의미가 없어짐. 웬만하면 안쓴다.
let batmanCar: any = "K5";
console.log(batmanCar);

batmanCar = { maker: "KIA", manufactured: 2017 };
console.log(batmanCar);

// function return type
function returnMyName(): string {
  return myName;
}
console.log(returnMyName());

// function argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}
console.log(multiply(2, 5));

// Function Types
let superMultiply: (a: number, b: number) => number;

superMultiply = multiply;
let resultMultiply = multiply(4, 6);
// superMultiply = returnMyName;

console.log(resultMultiply);
console.log(superMultiply);
console.log(superMultiply(2, 20));

// Types of Objects: Properties = key + value
type heroName = { name: string; age: number; address: string };

let heroOne: heroName = {
  name: "Batman",
  age: 25,
  address: "서울특별시 강남구 역삼동"
};
let heroTwo: heroName = {
  name: "Superman",
  age: 25,
  address: "서울특별시 서초구 방배동"
};
let heroThree: heroName = {
  name: "Ironman",
  age: 25,
  address: "서울특별시 광진구 군자동"
};

type heroName2 = {
  name: string;
  age: number;
  address: (arg: string) => string;
};
// let hero2One: heroName2 = {
//   name: "Batman",
//   age: 25,
//   address: "서울특별시 강남구 역삼동"
// };
