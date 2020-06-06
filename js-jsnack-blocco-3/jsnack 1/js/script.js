// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista
// di cognomi, Gatsby vuole generare una falsa lista di invitati.

var nomeFalso = generatoreNomiFalso(nomiInventati, cognomiInventati);

  // crare associazione casuale tra nomi e cognomi
  var numeroDiNomiFalsi = 3;
  for (var i = 0; i < numeroDiNomiFalsi; i++) {
    console.log(i);
    // elemento preso a caso dalla lista dei nomiInventati
    var nomiInventati  = ['Mario', 'Luigi', 'Francesco', 'Carla', 'Giulia'];
    var nomiCasuali = Math.floor(Math.random() * (nomiInventati.lenght );
    var nomeCasuale = nomiCasuali[nomiCasuali];
    // elemento preso a caso dalla lista dei cognomiInventati
    var cognomiInventati = ['Guerra', 'Belli', 'Patro', 'Masti', 'Cardello'];
    var cognomiCasuali = Math.floor(Math.random() * (cognomiInventati.lenght );
    var cognomeCasuale = nomiCasuali[cognomiCasuali];
    // genero un nome falso con un nome preso a caso dalle liste
    var nomeFalso = nomeCasuale + ' ' + cognomeCasuale;
  }


console.log(nomeFalso);

var listaFalsa = [];

listaFalsa.push(nomeFalso);

console.log(listaFalsa);
