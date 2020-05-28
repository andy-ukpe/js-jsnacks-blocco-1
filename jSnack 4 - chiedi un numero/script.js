// Chiedi un numero di 4 cifre all’utente e calcola la
// somma di tutte le cifre che compongono il numero.

// chiedi un numero
var numeroUtente = prompt('Inserisci un numero di 4 cifre');

// dividere la stringa
numeroUtente.toString();
// creo array
var numeri = numeroUtente.split('');
console.log(numeri);

// sommo le cifre
var somma = 0;
var i = 0;
while (i<numeri.length) {
  somma = somma + parseInt(numeri[i]);

  i++
}

console.log(somma);
