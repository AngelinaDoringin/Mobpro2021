// const person = {
//    firstName: "Angel",
//    lastName: "Doringin",
//    age: 21,
// };

// Hallo, nama saya Angel Doringin. Umur saya 21 tahun
// let kalimat = "Hallo, nama saya" +
// person.firstName +
//  " " + person.lastName + 
//  ". Umur Saya " + 
//  person.age +
// " tahun";

// let kalimat6 = `Hallo, nama saya ${person.firstName} ${person.lastname}, Umur saya ${person.age} tahun`

// console.log(kalimat); 
// console.log(kalimat6);



// ARROW FUNCTION

// function sayHello1 () {}
// const sayHello2 = function () {};
    // fitur implicit return value
// const sayHello3 = (param1, param2 = "Adam") => `Hello ${param1} ${param2}`;
// console.log (sayHello3("Angel", "Doringin"));

    // Rest Parameter & Spread Operator
// const display = (param1, param2, ...rest) => {
//   console.log(param1, param2, rest);
// };

// display(1, 2, 3, 4, 5, 6);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [8, 9];

// const combineArr = arr1.concat(arr2.concat(arr3));
const combineArr = [...arr1, ...arr2, 7, ...arr3];
const combineArr2 = [...combineArr];

console.log(combineArr);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const combineObj = { ...obj1, ...obj2 };
console.log(combineObj);

let person = {
    firstName: "Angel",
    lastName: "Doringin",
    age: 33,
  };
  
  person = {
    ...person,
    address: "Manado",
    job: "Teacher",
  };
  
  console.log(person);