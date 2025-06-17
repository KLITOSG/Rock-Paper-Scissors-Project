/*Project Rock Papers Scissors: Javscript pseudocode

  function to get the computer choice
     code that will return the computers choice 
     
*/
let choice;

function getComputerChoice (choice){
   choice = Math.random()

    if(choice <= 0.30){
        return "Rock" ;

    } else if(choice <= 0.70){
        return "Paper";

    }else{
        return "Scissors";
    }
} 

getComputerChoice(choice);

/* Funcion that takes the user's input
    create a prompt for useers input 
    Code that returns the users input*/

let input;

function getHumanChoice (input){
    input = prompt('Lets play Rock-Paper-Scissors. Whenever you are ready write here your choice: ');

    if(input == "Rock"){
        return "Rock";

    } else if ( input == "Paper"){
        return "Paper";

    }else if ( input == "Scissors"){
        return "Scissors" ;
    }
}
  
console.log(getHumanChoice(input));



