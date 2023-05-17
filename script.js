

//query section som ska spela i
let section = document.querySelector('section');
document.body.append(section);
section.style.display = 'flex';
section.style.justifyContent = 'space-around';
section.style.alignItems = 'center';

//initial element som ska skriva result
const h3 = document.querySelector('h3');
document.body.append(h3);
h3.style.display ='flex';
h3.style.justifyContent = 'space-around';
h3.style.margin = '200 px';

//initial reset button
const reset = document.querySelector('#reset-button');  
document.body.append(reset);

//creiate element p to text player choise
const p = document.querySelector('p');



let s; // att spara här enter name och använda det senare i game 
//Inter Name -> text name in the Game
const form = document.querySelector('form');
form.style.paddingBottom = '40px';
const container = document.querySelector('#playerName');
container.innerHTML = 'Player name ';

//event enter name     
form.addEventListener('submit', addElement);

function addElement(event){
    event.preventDefault();
    const textInput = document.querySelector('#inputName');
    console.log(textInput.value);
    container.innerText = textInput.value;
     s = container.innerText;    
     return textInput.value; 
}


//start initial score and random computer choice
let palyScore = 0;
let computerScore =0;
let playerSelection = 'To choice any by the player!';
let computerSelection = 'Computer Choice';

const computerOption = ['rock','paper','scissors'];
let btn = document.querySelector('#compBtn');
btn.innerText = 'computer-val';


//listen event in Player section and initial first parameters(for player and computer)
const div = document.querySelector('#player');

div.addEventListener('click', function(event){
  event.preventDefault();

  const randomOption = Math.floor( Math.random()*computerOption.length );
  btn.innerText = computerOption[randomOption];
  computerSelection = computerOption[randomOption];
  console.log(`the computer choice is ${computerSelection}`);

    if(event.target.tagName === 'BUTTON'){

        if(event.target.id === 'rock'){
            console.log('Klickat på Rock knappen');
            playerSelection = event.target.innerText;
            console.log(playerSelection);
            p.innerText = `Your choice is ${playerSelection}`;
            
        }
        else if(event.target.id === 'paper'){
            console.log('Klickat på Paper');
            playerSelection = event.target.innerText;
            console.log(playerSelection);
            p.innerText = `Your choice is ${playerSelection}`;
        }
        else if(event.target.id === 'sax'){
            console.log('Klickat på Sax');
            playerSelection = event.target.innerText;
            console.log(playerSelection);
            p.innerText = `Your choice is ${playerSelection}`;
        }
    }

    playRound(playerSelection,computerSelection); //send parameters to determin game
});


const h2 = document.querySelector('#playH');
h2.innerText = `Scoures`;
const d =document.querySelector('#compH');

//game determin:-
 function playRound(playerSelection, computerSelection) {

    if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper") {
        palyScore++;
        d.innerText = `Computer Score is ${computerScore}`; 
        h2.innerText = ` Your Scoure is ${palyScore}`;
       


    } 
    
    else if (playerSelection === computerSelection) {
     
      d.innerText = `Computer Score is ${computerScore}`; 
      h2.innerText = `Your Scoure is ${palyScore} It is a tie! `;
   
   
    } 
    
    else  {
      computerScore++;
      h2.innerText = `Your Scoure are ${palyScore}`;
      d.innerText = `Computer Score are ${computerScore}`; 
  }
calculateScore(computerScore, palyScore);
  }
  
//score determin:-
  function calculateScore(x,y){
    if (x === 3){
      h3.innerText = `You lose ${s}! The computer scoures are ${x}.`;
      computerScore=0;
      palyScore=0;
      setTimeout(() => {
        alert(`You lose ${s}. Reset the game!`);
      }, 200 );
     
      
    }
    else if (y === 3){
       h3.innerText = `You win ${s}! Your scoures are ${y}.`;
       computerScore=0;
       palyScore=0;
       setTimeout(() => {
        alert(`You win ${s}. Reset the game!`);
      }, 200 );
     
      
       
    }
    
      form.reset();
    
    }

//  reset
    reset.addEventListener('click', ()=>{
      d.innerText = `Computer Score is 0`; 
      h2.innerText = ` Your Scoure is 0`;
     h3.innerText = 'Result';
      computerScore = 0;
      palyScore = 0;
      container.innerText = ' New Player ';
      btn.innerText = 'computer-val';

  })



 