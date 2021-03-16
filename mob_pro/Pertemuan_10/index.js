// ASYNCHRONUS JAVASCRIPT (dapat menjalankan proses yang lain tanpa menunggu proses yang lain selesai)


// callback adalah sebuah fungsi yang ada dalam parameter dari fungsi yang lainnya
// function greetings (fullName) {
//     console.log (`Hi ${fullName}`);
// }

// function introduction (firstName, lastName, callback) {
//    const fullName = `${firstName} ${lastName}`;
//    callback(fullName);
// }

// introduction ("Angel", "Doringin", fullName => {
//     console.log `Hi ${fullName}`;
// });

// console.log ("satu");
// setTimeout (() => {
//     console.log ("dua");
// }, 2000);

// console.log ("tiga"); 

// function proses1 () {
//     console.log ('Proses 1 selesai dijalankan');
// }

// function proses2 (callback) {
//     setTimeout (() =>{
//       console.log ('Proses 2 selesai dijalankan');
//     callback ();
//     }, 2000);
// }

// function proses3 () {
//     console.log ('Proses 3 selesai dijalankan');
// }

// proses1();
// proses2(proses3);

// setTimeout (() => {
//     console.log ("Proses 1");
//     setTimeout (() => {
//         console.log ("Proses 2");
//         setTimeout (() => {
//             console.log ("Proses 3");
//             setTimeout (() => {
//                 console.log ("Proses 4");
//             }, 2000);
//         }, 2000);
//     }, 2000); 
// }, 2000);

// let condition = false;

// function newPromise() {
//  return new Promise ((resolve, reject) => {
//     if (condition) {
//         resolve ("Berhasil") ;
//     } else {
//         reject ("Error");
//     }
// });
// }
// newPromise()
// .then ((result) => {
//    return result;
// })
// .then ((result2) => {
//     console.log (`${result2} !!!`);
// })
// .catch ((error) => {
//     console.log (error);
// });

function getIdStudent (){
    return new Promise ((resolve, reject) => {
        resolve ("12345");
    })
}

function getNameById(id) {
    return new Promise ((resolve, reject) => {
        if (id === "123456") {
            resolve ("Angel Doringin");
        } else {
            reject ("Unknown ID student");
        }
    });
}

// getIdStudent().then ((id) => {
//     return getNameById(id);
// }).then ((name) => {
//     console.log(name);
// })
// .catch ((error) => {
//     console.log(error);
// });

const getNameByIdAsync = async () => {
    try {
    const id = await getIdStudent(); 
    const name = await getNameById(id);
    console.log (name);
    } catch (error) {
        console.log (error);
    }
};

getNameByIdAsync();