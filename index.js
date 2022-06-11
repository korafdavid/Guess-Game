console.log("Welcome to Guess Game. press q to quit");
startGame(2)


function startGame( range) {
const username = prompt('Please type your username');
var point = 0;
while(true) {
  var guessInput = prompt(`guess a number between 1 and ${range}`);
 var random = Math.round(Math.random() * (range - 1) + 1);
  console.log(random)
  if(random == guessInput){
    point++;
    range++
  } 
  if(guessInput == "q"){
    console.log(`${username} your total point is ${point}`)
    break;
  }
}

}