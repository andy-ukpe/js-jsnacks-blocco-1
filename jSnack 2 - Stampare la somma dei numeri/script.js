// Il software deve chiedere per 5 volte all’utente di inserire un numero.
//  Il programma stampa la somma di tutti i numeri inseriti.
//  Esegui questo programma in due versioni, con il for e con il while.

// INSERIRE PER 5 VOLTE UN NUMERO
var somma = 0;

for( i = 0 ; i < 5 ; i++){
  var numeroUtente = parseInt(prompt('Inserisci un numero'));
  somma= somma + numeroUtente
  }
// STAMPARE LA SOMMA DI TUTTI I NUMERI 
  console.log(somma);
