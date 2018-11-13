// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

$("#win").hide();
$("#lose").hide();
$("#draw").hide();

$("#back").hide();
$("#rules").hide();

$("#shoot").click(function(){
//player's choice

let choice = $("#input").val();
console.log(choice);
$("#userChoice").text(choice);

// computer's choice

function getRandomInt(min, max) {
  // let a = Math.ceil(min);
  // let b = Math.floor(max);
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

if(choice === "scissors" && comChoice === 2){`z`
  $("#winner").text("Player One Wins!!!");
  $("#win").show();
// alert("Human Wins");
}
else if(choice === "scissors" && comChoice === 1){
  $("#winner").text("The Computer Wins!!!");
  $("#lose").show();
// alert("Computer Wins");
}
else if(choice === "scissors" && comChoice === 0){
  $("#winner").text("It's a tie!!!");
  $("#draw").show();
// alert("Tie");
}
else if(choice === "rock" && comChoice === 1){
  $("#winner").text("It's a tie!!!");
  $("#draw").show();
// alert("Tie");
}
else if(choice === "rock" && comChoice === 0){
  $("#winner").text("Player One Wins!!!");
  $("#win").show();
// alert("Human Wins");
}
else if(choice === "rock" && comChoice === 2){
  $("#winner").text("The Computer Wins!!!");
  $("#lose").show();
// alert("Computer Wins");
}
else if(choice === "paper" && comChoice === 0){
  $("#winner").text("The Computer Wins!!!");
  $("#lose").show();
// alert("Computer Wins");
}
else if(choice === "paper" && comChoice === 2){
  $("#winner").text("It's a tie!!!");
  $("#draw").show();
// alert("Tie");
}
else if(choice === "paper" && comChoice === 1){
  $("#winner").text("Player One Wins!!!");
  $("#win").show();
// alert("Human Wins");
}
else{
  
}
//test
// alert("hi");
});

//Pop up rules
$("#howTo").click(function(){
  $("#gameImg").hide();
  $("#rules").show();
  $("#howTo").hide();
  $("#back").show();
});
$("#back").click(function(){
  $("#rules").hide();
  $("#gameImg").show();
  $("#back").hide();
  $("#howTo").show();
});
// DOCUMENT READY FUNCTION BELOW

