// alert('TEST');

// # (Insicurissimo) Password Generator

// - Chiedi all'utente il suo nome.
const userName = prompt("Qual'è il tuo nome?");
console.log(userName);
// - Chiedi all'utente il suo cognome.
const userSurname = prompt("Qual'è il tuo cognome?");
console.log(userSurname);

// - Chiedi all'utente il suo colore preferito.
const userColor = prompt("Qual'è il tuo colore preferito?");
console.log(userColor);

const userNumber = 21;
// - Scrivi sulla pagina il risultato della concatenazione: nomeCognomeColorePreferito21
const suggestedPassword = document.querySelector('#suggested-password');

// let userPassword =
//   userName.toLowerCase() +
//   userSurname.toLowerCase() +
//   userColor.toLowerCase() +
//   userNumber;
// console.log(userPassword);

// suggestedPassword.innerHTML = `Ciao ${userName} ${userSurname}, la tua nuova password è: ${userPassword}`;

// - Bonus
//     - Generare randomicamente il numero da concatenare alla password.

let randomNumber = Math.floor(Math.random() * (99 - 10) + 10);
console.log(randomNumber);

let userPassword =
  userName.toLowerCase() +
  userSurname.toLowerCase() +
  userColor.toLowerCase() +
  randomNumber;
console.log(userPassword);

suggestedPassword.innerHTML = `Ciao ${userName} ${userSurname}, la tua nuova password è: ${userPassword}`;
