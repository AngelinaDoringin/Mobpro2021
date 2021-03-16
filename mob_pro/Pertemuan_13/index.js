//LOOP in JavaScript

//Object literal
const mobil1 = {
    merek: "Toyota",
    warna: "Putih",

    nyalakanMobil: function () {
        console.log (`Mobil dengan merek ${this.merek} sudah dinyalakan`)
    },
};

const mobil2 = {
    merek: "Honda",
    warna: "Putih",

    nyalakanMobil: function () {
        console.log (`Mobil dengan merek ${this.merek} sudah dinyalakan`)
    },
};

mobil1.nyalakanMobil();
mobil2.nyalakanMobil();

//Object Class

class Mobil {
     constructor(merek, warna) {
         this.merek = merek;
         this.warna - warna;
     }

     nyalakanMobil () {
        console.log (`Mobil dengan merek ${this.merek} sudah dinyalakan`)   
     }
}