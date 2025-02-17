let x: number = 10;

x = 16;

console.log(x);

// inferencia x annotation

let y = 12;

let z: number = 12;

//tipos básicos

let firstName: string = "consuelo";
let age: number = 23;
const isadmin: boolean = true;

// String != string

console.log(typeof firstName);

// object
const myNumbers: number[] = [1, 2, 3];

console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toUpperCase());
myNumbers.push(5);

console.log(myNumbers);

// tuplas

let myTuple: [number, string, string[]];

myTuple = [5, "teste", ["a", "b"]];

//myTuple = [true, false, true]

// object literals => {prop: value}
const user: { name: string; age: number } = {
  name: "Pedro",
  age: 18,
};

console.log(user);

console.log(user.name);

// user.job = 'programador'

// any
let a: any = 0;

a = "teste";
a = true;
a = [];

// union type

let id: string | number = "18";

id = 200;

//id = true
//id = []

// type alias
type myIdType = number | string;

const userId: myIdType = 10;
const productId: myIdType = "00001";
const shirId: myIdType = 123;

// enum
// tamanhos de roupas
enum Size {
  P = "Pequeno",
  M = "Médio",
  G = "Grande",
}

const camisa = {
  name: "Camisa gola v",
  Size: Size.G,
};

console.log(camisa);

// literal types
let teste: "altenticado" | null;

// teste = "outrovalor"
teste = "altenticado";
teste = null;

// funcoes
function sum(a: number, b: number) {
  return a + b;
}

console.log(sum(12, 12));
// console.log(sum("12", true))

function sayHelloto(name: string): string {
  return `Hello ${name}`;
}

console.log(sayHelloto("Consuêlo"));

function logger(msg: string): void {
  console.log(msg);
}

logger("Teste!");

function greeting(name: string, greet?: string) {
  if (greet) {
    console.log(`Olá ${greet} ${name}`);
    return;
  }
  console.log(`Olá ${name}`);
}

greeting("josé");
greeting("Pedro", "Sir");

// interfaces
interface MathFunctionParams {
  n1: number;
  n2: number;
}

function sumNumbers(nums: MathFunctionParams) {
  return nums.n1 + nums.n2;
}

console.log(sumNumbers({ n1: 1, n2: 2 }));

function multiplyNumberes(nums: MathFunctionParams) {
  return nums.n1 * nums.n2;
}

const someNumbers: MathFunctionParams = {
  n1: 5,
  n2: 10,
};

console.log(multiplyNumberes(someNumbers));

// narrowing
// checagem tipos
function doSomething(info: number | boolean) {
  if (typeof info === "number") {
    console.log(`O número é ${info}`);
    return;
  }
  console.log("Não foi passado um número");
}

doSomething(5);
doSomething(true);

// generics
function showArraysItems<T>(arr: T[]) {
  arr.forEach((item) => {
    console.log(`ITEM: ${item}`);
  });
}

const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];

showArraysItems(a1);
showArraysItems(a2);

// classes
class User {
  name;
  role;
  isApproved;

  constructor(name: string, role: string, isApproved: boolean) {
    this.name = name;
    this.role = role;
    this.isApproved = isApproved;
  }

  showUserName() {
    console.log(`O nome do usuário é ${this.name}`);
  }

  showUserRole(canShow: boolean) {
    if (canShow) {
      console.log(`Idade do usuário é ${this.role}`);
      return;
    }
    console.log("Informação restrita!");
  }
}

const zeca = new User("Zéca", "Admin", true);

console.log(zeca);

zeca.showUserRole(false);

// interfaces em classes
interface Ivehicle {
  brand: string;
  showBrand(): void;
}

class Car implements Ivehicle {
  brand;
  wheels;

  constructor(brand: string, wheels: number) {
    this.brand = brand;
    this.wheels = wheels;
  }

  showBrand(): void {
    console.log(`A marca do carro é: ${this.brand}`);
  }
}

const opala = new Car("Chevrolet", 4);

opala.showBrand();

// Herança
class SuperCar extends Car {
  engine;

  constructor(brand: string, wheels: number, engine: number) {
    super(brand, wheels);
    this.engine = engine;
  }
}

const mustang = new SuperCar("Ford", 4, 5.0);

console.log(mustang);

mustang.showBrand();

// decorators
function BaseParamters() {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      id = Math.random();
      createdAt = new Date();
    };
  };
}
@BaseParamters()
class Person {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const sam = new Person("Sam");

console.log(sam);
