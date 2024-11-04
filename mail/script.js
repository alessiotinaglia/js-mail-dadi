"use String"

// Consegna

// Mail

// Chiedi all’utente la sua email,

// controlla che sia nella lista di chi può accedere,

// stampa un messaggio appropriato sull’esito del controllo.

// Non è necessario provvedere alla validazione delle email


// Esercizio :

// Creare delle mail autorizzate
const emailAutorizzate = [
    "pippo@esempio.com",
    "pluto@esempio.com",
    "paperino@esempio.com",
    "topolino@esempio.com"
];

// Chiediamo all'utente di inserire la sua mail 
const emailUtente = prompt("Inserisci la tua mail");
console.log(emailUtente);

// verifichiamo se la mail dell'utente e nella lista di quelle che può accedere 
if (emailAutorizzate.includes(emailUtente)){
    // stampiamo due messaggi, se e valida o se non e valida 
    console.log("La mail inserita è valida, Benvenuto!");
} else {
    console.log("La mail inserita non è valida");
}














