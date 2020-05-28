// // In un array sono contenuti i nomi degli invitati
// // alla festa del grande Gatsby,
// // chiedi all’utente il suo nome e comunicagli se
// // può partecipare o no alla festa.
//
// // LISTA INVITATI ALLA festa
// var invitatiFesta = ['Valerie', 'Ernesto', 'Joshua', 'Melanie', 'Franco'];
// // CHIEDERE ALL'UTENTE IL nome
// var nomeUtente = prompt('Inserisci il tuo nome per vedere se Gatsby ti ha incluso nella lista invitati!');
// console.log(nomeUtente);
// // var messaggio
// var messaggio = 'Mi spiace, non puoi partecipare';
//
// // confronto lista invitati
// for (var i = 0; i < invitatiFesta.length; i++) {
//   if(invitatiFesta[i] == nomeUtente){
//     messaggio = 'Sei in lista';
//     console.log(invitatiFesta[i] == nomeUtente);
//
// }
// alert (messaggio);

// In un array sono contenuti i nomi degli invitati
// alla festa del grande Gatsby,
// chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.

// LISTA INVITATI ALLA festa
var invitatiFesta = ['Valerie', 'Ernesto', 'Joshua', 'Melanie', 'Franco'];

// CHIEDERE ALL'UTENTE IL nome
var nomeUtente = prompt('Inserisci il tuo nome per vedere se Gatsby ti ha incluso nella lista invitati!');
console.log(nomeUtente);

// var presenza in lista
var presenteInLista = false;
var i = 0;

// confronto lista invitati
while (presenteInLista != true && i < invitatiFesta.length) {

  if(invitatiFesta[i] == nomeUtente){
    presenteInLista = true;
  }
  console.log(invitatiFesta[i]);
  i++
};

if(presenteInLista === true){
  console.log('sei invitato');
}
else {
  console.log('non sei in lista');
};
