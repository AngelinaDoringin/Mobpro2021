// ARRAY

//1.
//let people = ["Greg", "Mary", "Devon", "James"];
//for (let i = 0; i < people.length; i++) {
//    console.log(people[i]);
//};

//2.
//let people = ["Greg", "Mary", "Devon", "James"];
//
//people.forEach (function (data) {
//   console.log(data);
//});

//3.
//let people = ["Greg", "Mary", "Devon", "James"];
//
//people.shift();
//console.log (people);

//4.
//let people = ["Greg", "Mary", "Devon", "James"];
//
//people.pop();
//console.log (people);

//5.
//let people = ["Greg", "Mary", "Devon", "James"];
//
//people.unshift("Matt");
//console.log (people);

//6.
//let people = ["Greg", "Mary", "Devon", "James"];
//
//people.push ("Angel");
//console.log (people);

//7.
//let people = ["Greg", "Mary", "Devon", "James"];
//for (let i = 0; i < people.length; i++) {
//    if (i > 1) {
//        break;
//    }
//    console.log(people[i]);
//};

//8.
//let people = ["Greg", "Mary", "Devon", "James"];
//
//people.slice(2);
//console.log(people);

//9.
//let people = ["Greg", "Mary", "Devon", "James"];
//
//people = ["Greg", "Mary", "Devon", "James"];
//people.splice(2, 1, "Elizabeth", "Artie");
//console.log (people);

//10.
//let withBob = "Bob";
//let people =["Bob", "greg", "marry", "dll"];
//
//console.log (people);


// OBJECT

//1.
//let programming = {
//    languages: ["JavaScript", "Python", "Ruby"],
//    isChallenging: true,
//    isRewarding: true,
//    difficulty: 8,
//    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
//};
//programming.languages.push("Go");
//console.log(programming.languages);


//2.
//let programming = {
//    languages: ["JavaScript", "Python", "Ruby"],
//    isChallenging: true,
//    isRewarding: true,
//    difficulty: 8,
//    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
//};
//console.log(programming["difficulty"] = 7);

//3.
//let programming = {
//    languages: ["JavaScript", "Python", "Ruby"],
//    isChallenging: true,
//    isRewarding: true,
//    difficulty: 8,
//    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
//};
//delete programming.jokes;
//console.log(programming);

//4.
//let programming = {
//    languages: ["JavaScript", "Python", "Ruby"],
//    isChallenging: true,
//    isRewarding: true,
//    difficulty: 8,
//    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
//};
//programming.isFun = true;
//console.log(programming);

//5.
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
let prgrmng = programming.languages.map(function(item, index){
    return index + "-" + item;
});
console.log(prgrmng);
