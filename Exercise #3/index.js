// Exercise #3


//1. Class
class Orang {
    constructor (nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }

    bekerja() {
        console.log (`${this.nama} sedang bekerja seperti biasa`);
    }
};

const user1 = new Orang ("Angel", "21");
user1.bekerja();


//2. Inheritance
class Pelajar extends Orang {
    constructor (nama, umur, namaSekolah) {
            super(nama, umur);
            this.nama = nama;
            this.umur = umur;
            this.namaSekolah = namaSekolah;
        }
        
    tidur() {
        console.log (`${this.nama} sedang tidur`);
    }
    makan() {
        console.log (`${this.nama} sedang makan`);
    }
    belajar() {
        console.log (`${this.nama} belajar di ${this.namaSekolah}`);

    }
};

const user = new Pelajar("John", "17", "Unklab");

user.tidur();
user.makan();
user.belajar();