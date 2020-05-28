// L’utente inserisce due numeri in successione, con due
// prompt. Il software stampa il maggiore.

// // UTENTE INSERISCE 2 NUMERI
// var primoNumero = parseInt(prompt('Inserisci un numero'));
//
// var secondoNumero = parseInt(prompt('Inserisci un secondo numero'));
//
//
// // software stampa il maggiore
//
// if(primoNumero > secondoNumero){
//   console.log(primoNumero);
// }
// else if (primoNumero < secondoNumero){
//   console.log(secondoNumero);
// } else{
//   console.log('i numeri sono uguali');
// }

// UTENTE INSERISCE 2 NUMERI
var primoNumero = parseInt(prompt('Inserisci un numero'));

var secondoNumero = parseInt(prompt('Inserisci un secondo numero'));

var messaggio;

// software stampa il maggiore

if(primoNumero > secondoNumero){
  messaggio = primoNumero;
}
else if (primoNumero < secondoNumero){
  messaggio = secondoNumero;
} else{
  messaggio = 'i numeri sono uguali';
}
console.log(messaggio);
