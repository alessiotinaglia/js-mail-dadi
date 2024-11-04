"use String"

// Consegna

// Gioco dei dadi

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// Esercizio :

// Genera un numero random per il giocatore 
const numeroGiocatore = Math.floor(Math.random() * 6) + 1;
console.log("Il tuo numero : " + numeroGiocatore);

// Genera un numero random per il computer
const numeroComputer = Math.floor(Math.random() * 6) + 1;
console.log("Il numero del computer : " + numeroComputer);

// Genera vincitore 

if (numeroGiocatore > numeroComputer) {
    console.log("Hai vinto!");
} else if (numeroGiocatore < numeroComputer) {
    console.log("Hai perso!");
} else {
    console.log("È un pareggio!");
}