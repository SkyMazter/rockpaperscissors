// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



$("#shoot").click(function(){
//player's choice

let choice = $("#input").val();
console.log(choice);
$("#userChoice").text(choice);

// computer's choice

function getRandomInt(min, max) {
  let a = Math.ceil(min);
  let b = Math.floor(max);
  const final = Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  console.log(final);
  return final;
 }
let comChoice = getRandomInt(0,3);
console.log(comChoice);
const options = ['scissors','rock','paper'];
console.log(options[comChoice]);
$("#computerChoice").text(options[comChoice]);

//deciding the winner

if(choice === "scissors" && comChoice === "paper"){
alert("Human Wins");
}
else if(choice === "scissors" && comChoice === "rock"){
alert("Computer Wins");
}
else if(choice === "scissors" && comChoice === "scissors"){
alert("Tie");
}
//test
// alert("hi");
});

// DOCUMENT READY FUNCTION BELOW

