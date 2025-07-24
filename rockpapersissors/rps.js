var playerScore = 0
var computerScore = 0

function play(playerChoice){
     console.log(playerChoice)
     var cpuNumber = Math.floor(Math.random() * 3)
     
     if (cpuNumber == 0){
          var cpuChoice = "rock";
     }  else if (cpuNumber == 1){
          var cpuChoice = "paper"
     }  else {
          var cpuChoice = "sissors"
     }
 document.getElementById("you").textContent = playerChoice
 document.getElementById("cpu").textContent = cpuChoice

     if (playerChoice == cpuChoice){
          document.getElementById("result").textContent = "its a tie"
     } else if (playerChoice == "rock"){
          if (cpuChoice == "scissors"){
           document.getElementById("reult").textContent = "Player wins!"
           
          }
          if (cpuChoice = "paper"){
               document.getElementById("result").textContent = "CPU wins!"
          }
     } else if (playerChoice == "paper"){
          if (cpuChoice == "rock"){
               document.getElementById("result").textContent = "Player wins!"
          } 
          if (cpuChoice = "scissors"){
               document.getElementById("result").textContent = "CPU wins!"
          }

     } else if (playerChoice == "scissors"){
          if (cpuChoice == "rock"){
               document.getElementById("result").textContent = "Cpu wins!"
          } 
          if (cpuChoice = " paper"){
               document.getElementById("result").textContent = "Player wins!"
          }

     }


}


