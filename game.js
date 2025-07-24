var classSize = 7
var cityName = "morgan hill"
var isSunny = true
var allPresent;

if(classSize == 7){
    allPresent = true
}

function addStudent(){
    classSize++
}

//addStudent()

var guesses = 0
var randomNumber = Math.floor(Math.random() * 100)


function buttonPressed(){
guesses++
document.getElementById("guessTracker").textContent = "you have guessed" +   guesses  + 'times';

var userGuess = document.getElementById("userInput").value;
console.log("user="+ userGuess);

userGuess = parseInt(userGuess); //converts from text

if (userGuess == randomNumber){
    console.log("You won")
    document.getElementById("resultText").textContent = "!You Won!"
}else if (userGuess > randomNumber){
 document.getElementById("resultText").textContent = "Too High"
}else {
 document.getElementById("resultText").textContent = "Too Low"}

}