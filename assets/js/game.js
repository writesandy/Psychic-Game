'use strict'

//variables 

var wins = 0;
var losses = 0;
var guesses = 5;
var guessesDone = "";



var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

var randomLetter = letters.charAt(Math.floor(Math.random()*letters.length));
console.log(randomLetter);



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

        
        } else { guesses--;
            document.getElementById('Guesses').innerHTML=guesses;
    
        
            if(guesses === 0) {            
                losses++;
                document.getElementById('Losses').innerHTML=losses;
                guessesDone = "";
                guesses = 5;
                document.getElementById('Guesses').innerHTML=guesses;
            }
        }

        });


    
    