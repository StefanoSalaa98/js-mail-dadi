// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const PcNumber = Math.floor(Math.random()*6 + 1);
const UserNumber = Math.floor(Math.random()*6 + 1);

console.log("PcNumber:" ,PcNumber);
console.log("UserNumber:" ,UserNumber);

if(PcNumber > UserNumber){
    console.log("Ha vinto il computer");
}
else if(PcNumber < UserNumber){
    console.log("Ha vinto l'utente");
}
else{
    console.log("Pc ed utente hanno ottenuto lo stesso punetggio");
}