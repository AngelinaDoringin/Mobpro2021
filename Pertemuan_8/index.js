// Destructuring

// Array (Caranya, ambil sebagian item, Deklarasi & Assignment terpisah, Devault value, Rest Operator)

 const arrPerson = ['Angel', 'Doringin', 21, false]
// const firstName = arrPerson[0];
// const lastName = arrPerson[1];
// const age = arrPerson[2];
// const isMarried = arrPerson[3];

// lebih memudahkan dari yang diatas
// const [firstName, lastName, age, isMarried] = arrPerson;
// console.log (firstName, lastName, age, isMarried);

// ambil sebagian item
// const arrPerson1 = ['Angel', 'Doringin', 21, false, "Sulawesi Utara"];
// let [firstName1, , age1, , address = "Airmadidi"] = arrPerson1; // mengambil sebagian item indeks 0 & 3 dan menaruh devault value (address)
// console.log(firstName1, age1, address);

// let [firstName, lastName, ...rest] = arrPerson;

// console.log (firstName, lastName);
// console.log(rest); // rest - disimpan dalam array yang baru

// Object (Caranya, ambil sebagian item, Deklarasi & Assignment terpisah, Devault value, Rest Operator, )
    // cara lama
const objPerson = {
firstName: "Angel",
lastName: "Doringin",
age: 21,
isMarried: false
};
// const firstName = objPerson.firstName;
// const lastName = objPerson.lastName;
// const age = objPerson.age;
// const isMarried = objPerson.isMarried;

// const { age:umur } = objPerson;

// console.log (umur);

    // deklarasi dan assignment terpisah
// ({firstName, lastName, address = "Manado"} = objPerson)
// console.log (firstName, lastName, address);
        /////////////

// let {firstName, lastName, ...rest} = objPerson;
// console.log (firstName, lastName, rest);

const display = ({firstName, lastName}) =>
    `Hallo nama saya ${firstName} ${lastName}`;

console.log (display(objPerson));