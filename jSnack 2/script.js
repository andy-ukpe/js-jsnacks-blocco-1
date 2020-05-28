// Il software deve chiedere per 5 volte all’utente di inserire un numero.
//  Il programma stampa la somma di tutti i numeri inseriti.
//  Esegui questo programma in due versioni, con il for e con il while.

// // INSERIRE PER 5 VOLTE UN NUMERO
// var somma = 0;
//
// for( var i = 0 ; i < 5 ; i++){
//   var numeroUtente = parseInt(prompt('Inserisci un numero'));
//   somma= somma + numeroUtente
//   }
// // STAMPARE LA SOMMA DI TUTTI I NUMERI
//   console.log(somma);

// INSERIRE PER 5 VOLTE UN NUMERO
var somma = 0;
var i = 0 ;
while(  i < 5 ){
  var numeroUtente = prompt('Inserisci un numero');
  // if (isNaN(numeroUtente) || numeroUtente = ' '){
  //   numeroUtente = prompt('Inserisci un numero');
  // } else if (!isNaN(numeroUtente)){
    paerseInt(numeroUtente);
    somma= somma + numeroUtente
  // }
   i++
  }
// STAMPARE LA SOMMA DI TUTTI I NUMERI
  console.log(somma);
