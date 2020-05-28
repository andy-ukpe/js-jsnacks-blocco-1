// Il software deve chiedere per 5 volte all’utente di inserire un numero.
//  Il programma stampa la somma di tutti i numeri inseriti.
//  Esegui questo programma in due versioni, con il for e con il while.

// chiedere all'utente di inserire 5 volte un numero
// variabili
// var numero = [];
// console.log(numero);
//
//   numeroUtente = prompt('inserisci un numero');
//   console.log(numeroUtente);
//
// // INSERIRE NOMI NELL'ARRAY
// for( i = 0 ; i < 5 ; i++){
//   numero.push(numeroUtente);
//   console.log(numero[i]);
//   // if(numero[i])
//   }

  // Il software deve chiedere per 5 volte all’utente di inserire un numero.
  //  Il programma stampa la somma di tutti i numeri inseriti.
  //  Esegui questo programma in due versioni, con il for e con il while.

  // variabili
  somma = 0;
  // il software chiede per 5 volte di inserire un numero
  for( var i = 0 ; i < 5 ; i++){
    // CHIEDERE IL NUMERO ALL'UTENTE
    var numeroUtente = prompt('inserisci un numero');
    //inserire il numeroUtente nell'array
    numeroUtente.toString();
    numeri.push(numeroUtente[i]);

      }
    } else{
      numeroUtente = prompt('inserisci un numero');
    }
    console.log(numeroUtente)
    console.log(numeri);
