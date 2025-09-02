// Crea una lista di email di invitati ad una festa.
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
// ‼️ Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
// Si può fare? Certo che si basta ragionare un po’.
// Nota: 
// Non è necessario provvedere alla validazione delle email

const elencoMail = [
    "mario.rossi@gmail.com",
    "luca.bianchi@gmail.com",
    "fabio.verdi@gmail.com",
    "paolo.neri@gmail.com",
    "maria.colombo@gmail.com",
    "elisa.frigerio@gmail.com"
];

console.log(elencoMail);

const mail = prompt("Inserisci la tua mail");

let isMailPresent = false;
for (let i=0; i<elencoMail.length && isMailPresent === false; i++){
    if(elencoMail[i] === mail){
        isMailPresent = true;
    }
    console.log(i);
}
if (isMailPresent){
    console.log("Benvenuto, puoi accedere alla festa!");
}
else{
    console.log("Spiacente, non risulti presente sulla lista.");
}