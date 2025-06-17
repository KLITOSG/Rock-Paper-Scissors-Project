/*Project Rock Papers Scissors: Javscript pseudocode

  function to get the computer choice
     code that will return the computers choice 
     
*/


function getComputerChoice (){
   let choice = Math.random()

    if(choice <= 0.30){
        return "Rock" ;

    } else if(choice <= 0.70){
        return "Paper";

    }else{
        return "Scissors";
    }
} 



/* Funcion that takes the user's input
    create a prompt for useers input 
    Code that returns the users input
*/



function getHumanChoice (){
    let input = prompt('Lets play Rock-Paper-Scissors. Whenever you are ready write here your choice: ');

    return input ; 
}
  



/* declare variables for score: one variable for user and one for computer */

let humanScore = 0;
let computerScore = 0; 

/* function that takes as arguments the computes and human choices  
       code that makes the user input case insensitive
       code that logs a string value representing the round winner, such as: “You lose! Paper beats Rock”.
       code that increments the scores based in who wins the round
*/

function playRound(humanChoice,computerChoice){
     if (humanChoice.localeCompare("Rock",undefined,{sensitivity:"base"})=== 0){
        humanChoice = "Rock" ;

     }else if(humanChoice.localeCompare("Paper",undefined,{sensitivity:"base"})=== 0){
        humanChoice= "Paper" ;

     }else if(humanChoice.localeCompare("Scissors",undefined,{sensitivity:"base"})=== 0){
        humanChoice = "Scissors"
     }

         
 if(humanChoice == "Rock" && computerChoice == "Rock"){
        console.log ('Its a Tie !');
        

    } else if (humanChoice == "Rock" && computerChoice == "Paper"){
        console.log("You lose ! Paper wraps the Rock");
        computerScore ++ ;
        console.log(humanScore,computerScore);

    }else if(humanChoice == "Rock" && computerChoice == "Scissors"){
       console.log('You win ! Rock brakes the Scissors');
       humanScore ++ ;
       console.log(humanScore,computerScore);

    }else if ( humanChoice == "Paper" && computerChoice =="Rock"){
        console.log('You win ! Paper wraps the Rock');
        humanScore ++;
        console.log(humanScore,computerScore);

    }else if(humanChoice == "Paper" && computerChoice == "Paper"){
        console.log('Its a tie !');
        console.log(humanScore,computerScore);

    }else if(humanChoice == "Paper" && computerChoice == "Scissors"){
        console.log('You lose! Scissors cut the Paper');
        computerScore ++ ; 
        console.log(humanScore,computerScore);

    }else if(humanChoice == "Scissors" && computerChoice == "Rock"){
        console.log('You lose ! Rock breaks the Scissors') ;
        computerScore ++ ;
        console.log(humanScore,computerScore);

    }else if (humanChoice == "Scissors" && computerChoice == "Paper"){
        console.log('You win ! Scissors cut the Paper');
        humanScore ++ ;
        console.log(humanScore,computerScore);

    }else if( humanChoice == "Scissors" && computerChoice == "Scissors"){
        console.log('Its a tie !');
    }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();




/*function that makes 5 rounds of this game
    code that makes the game run 5 rounds*/

function playGame(){
   

    for( rounds = 1; rounds <= 5; rounds ++){
     const humanChoice = getHumanChoice();
     const computerChoice = getComputerChoice();

     console.log(`Round: ${rounds}`);
     playRound(humanChoice,computerChoice);

     console.log(`Score: You: ${humanScore} | Computer: ${computerScore}`);
    }

    if(humanScore<computerScore){
        console.log("You lost !! :(");

    }else if(humanScore>computerScore){
        console.log('YOU WON !!! ;)');

    }else{
        console.log('Its a tie !!!')
    }
}
playGame();