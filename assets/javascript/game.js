'use strict'

//variables 

let wins = 0;
let losses = 0;
let guesses = 5;
let guessesDone = "";
let randomLetter = "";
const letters = "abcdefghijklmnopqrstuvwxyz"


function startGame () {
    randomLetter = letters.charAt(Math.floor(Math.random()*letters.length));
    console.log(randomLetter);
    return randomLetter;
}

startGame();

    document.addEventListener('keydown', (event) => {
   
        const keyName = event.key; 
        console.log('keydown event\n\n' +keyName); 


        guessesDone = guessesDone+" "+keyName+" ";
        document.getElementById('Your Guesses').innerHTML=guessesDone;


        if (randomLetter === keyName) {
            wins++; 
            document.getElementById('Wins').innerHTML=wins;
            guessesDone = ""; 
            guesses = 5;
            document.getElementById('Guesses').innerHTML=guesses;
            startGame();


        
        } else { guesses--;
            document.getElementById('Guesses').innerHTML=guesses;
    
        
            if(guesses === 0) {            
                losses++;
                document.getElementById('Losses').innerHTML=losses;
                guessesDone = "";
                guesses = 5;
                document.getElementById('Guesses').innerHTML=guesses;
                startGame();

            }
        }

        });


    
    