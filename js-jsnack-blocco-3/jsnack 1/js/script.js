// // Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista
// // di cognomi, Gatsby vuole generare una falsa lista di invitati.
//
//
//
//   // crare associazione casuale tra nomi e cognomi
//   var numeroDiNomiFalsi = 3;
//   for (var i = 0; i < numeroDiNomiFalsi; i++) {
//     console.log(i);
//     // elemento preso a caso dalla lista dei nomiInventati
//     var nomiInventati  = ['Mario', 'Luigi', 'Francesco', 'Carla', 'Giulia'];
//     var nomiCasuali = Math.floor(Math.random() * (nomiInventati.lenght );
//     var nomeCasuale = nomiCasuali[nomiCasuali];
//     // elemento preso a caso dalla lista dei cognomiInventati
//     var cognomiInventati = ['Guerra', 'Belli', 'Patro', 'Masti', 'Cardello'];
//     var cognomiCasuali = Math.floor(Math.random() * (cognomiInventati.lenght );
//     var cognomeCasuale = nomiCasuali[cognomiCasuali];
//     // genero un nome falso con un nome preso a caso dalle liste
//     var nomeFalso = nomeCasuale + ' ' + cognomeCasuale;
//   }
//
//
// console.log(nomeFalso);
//
// var listaFalsa = [];
//
// listaFalsa.push(nomeFalso);
//
// console.log(listaFalsa);

// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista
// di cognomi, Gatsby vuole generare una falsa lista di invitati.

// GENERARE LISTA NOMI CASUALI
var arrayNomi = ['Carmelo', 'Genoveffa', 'Velma', 'Ernesto', 'Achille'];
var arrayCognomi = ['Rossi', 'Guerra', 'Lancini', 'Obretti', 'Poli'];

// GENERARE LISTA CASUALE
var numeroCombinazioni = parseInt(prompt('Inserisci un numero'));
for (var i = 0; i <= numeroCombinazioni; i++) {
  // far uscire come output nomi falsi

  var nomiCasuali = Math.floor(Math.random()  * arrayNomi.length );
  // console.log(nomiCasuali);
  // associare il numero al nome
  var nomiRandom = arrayNomi[nomiCasuali];
  // console.log(nomiRandom);

  // far uscire cognomi falsi in modo casuale
  var cognomiCasuali = Math.floor(Math.random() * arrayCognomi.length);
  // console.log(cognomiCasuali);
  // associare il cognome al numero
  var cognomiRandom = arrayCognomi[cognomiCasuali];
  // console.log(cognomiRandom);

  // creare nome falso
  var nomeFalso = nomiRandom + ' ' + cognomiRandom;
  console.log(nomeFalso);
}
