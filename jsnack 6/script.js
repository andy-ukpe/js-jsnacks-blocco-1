// L’utente ha a disposizione un input in cui
// inserire un nome di un giocatore e
// una select tramite la quale puoi scegliere se il giocatore
// va inserito tra i titolari o tra le riserve.

// Quando si clicca sul button “Aggiungi” il nome viene
// aggiunto nella lista dei titolari se l’utente ha scelto titolari,
// altrimenti tra le riserve.

// all'inserimento di un input value  e la selezione
// di una select si sceglie se il giocatore va tra i titolari o le riserve.



var select = $('select');
// vevento click aggiungi
$('button').click(
  function( ){
    var nomeGiocatore= $('#nomeGiocatore').val();
    console.log(nomeGiocatore);
    var ruolo = $('#ruolo').val();
    if(ruolo === 'titolari'){
      $('.listaTitolari').append('<li>' + nomeGiocatore + '</li>');
    }else{
      $('.listaRiserve').append('<li>' + nomeGiocatore + '</li>');
    }
  }
);
