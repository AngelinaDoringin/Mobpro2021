// ARRAY

// let numbers = [1, 2, 3, 4, 5];
// let jhon = ['Jhon', 'Doe', 33, true ]

// let numbers = new Array (1, 2, 3, 4, 5);
// let jhon = new Array ('Jhon', 'Doe', 33, true);
//
// jhon[3] = false;
//
// console.log (numbers[numbers.length - 1]);
// console.log (jhon[3]);

// OBJECT

const john = {
    firtstName: 'John',
    lastName: 'Doe',
    age: 33,
    isMarried: true,
    sayHello: function () {
        console.log ("Hello");
    }

};

// const john = new Object();
// john.firstName = "John";
// john.lastName= "Doe";
// john.age = 33;
// john.isMarried = true;

console.log (john.lastName);
console.log (john["isMarried"]);

john.adress = "Manado";
john["nationality"] = "Indonesian";
console.log (john);

john.sayHello();