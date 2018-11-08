// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
function getRandomInt(min, max) {
    let a = Math.ceil(min);
     let b = Math.floor(max);
     const final = Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
     console.log(final);
     return final;
   }
let comChoice = getRandomInt(0,3);
console.log(comChoice);

let choice = $("#userChoice").val();
console.log(choice);


// DOCUMENT READY FUNCTION BELOW

