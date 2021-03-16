let hello = "Hello World"; //tipe string
hello = "Hello World :)";

const birthYear = 1999;

let age = 21; //tipe number
age += 2;
let isMarried = false; //tipe bolian
let alamat; //tipe undefined

console.log (hello);
console.log (birthYear);
console.log (age);
console.log (isMarried);
console.log (alamat);

let namaDepan = "Angel ";
let namaBelakang = "Doringin"
let namaLengkap = namaDepan + namaBelakang;
console.log (namaLengkap);

console.log (10 == "10"); //Loose equality
console.log (10 === "10"); //Strict equality

const hasil = 11 % 2 === 0? "Genap" : "Ganjil";
console.log (hasil);

//Function 

//Function Declaration
function ucapkanSalam(){
    console.log ("Selamat Siang");
}
ucapkanSalam();

//Function Expression
const ucapkanSalam2 = function () {
    return "selamat Siang dari Function Expression";
};

console.log(ucapkanSalam2());