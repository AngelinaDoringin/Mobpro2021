const fullName = "Angel Doringin";

const person = {
    firstNamee: "Angelina",
    lastName: "Doringin",
    age: 21,
};

 const display = ({firstName, lastName}) => {
        console.log (`Hello ${firstName} ${lastName}`);
 };

 export {fullName as namaLengkap, person, display}; // export 1x semua variable & penggunaan export as