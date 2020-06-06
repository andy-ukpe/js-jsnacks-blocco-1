// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
// Ogni volta che ne crei uno, stampalo a schermo.

var numeroUtente = parseInt(prompt('Inserici un numero per generare un array in base al numero inserito'));
var singoloArray = generareDieciNumeriInArray (100, 1);
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
var i = 1;
while( i <= numeroUtente) {

  var arrayDaStampare = console.log('l\'array è il numero' + ' ' + i + ' ' + singoloArray  );
  i++

}

// FUNZIONE CHE RESTITUISCA 10 NUMERI;
// Forma 10 numeri casuali tra 1 e 100.
function generareDieciNumeriInArray(max, min){

  var array = [];
  for (var i = 0; i < 10; i++) {
    // creazione numeri random
    var numeriRandom = Math.floor(Math.random() * max) + min;

    array.push(numeriRandom);
  }

  return array;
}
