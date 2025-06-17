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
console.log(getComputerChoice(choice));


