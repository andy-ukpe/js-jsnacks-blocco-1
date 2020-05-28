// // L’utente inserisce due parole in successione, con due prompt.
// // Il software stampa prima la parola più corta, poi la parola più lunga.
//
// // INSERIRE PAROLE NEL SISTEMA
// //  inserire prima parola
// var primaParola = prompt('inserisci prima parola');
// console.log(primaParola);
//
// // inserire seconda parola
// var secondaParola = prompt('inserisci seconda parola');
// console.log(secondaParola);
//
// // messaggio
// var messaggio;
// // Titolo
// var titoloDoc = document.getElementById('Titolo');
//
// // CICLO DI COMPARAZIONE
//  if(primaParola.length > secondaParola.length){//confronto la prima parola con la seconda
//   // stampo messaggio
//   console.log(secondaParola + '_' + primaParola);
//   messaggio = secondaParola + '_' + primaParola;
// } else if(primaParola.length < secondaParola.length){//confronto la seconda parola con la prima
//     // stampo messaggio
//   console.log(primaParola + '_' + secondaParola);
//   messaggio = 'la seconda parola è più lunga della prima';
// } else{
//     // stampo messaggio
//   console.log('Le parole hanno lunghezza identica');
// }
// console.log(messaggio);
// alert( messaggio) ;

// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// INSERIRE PAROLE NEL SISTEMA
//  inserire prima parola
var primaParola = prompt('inserisci una parola');
while (primaParola == ' ' || !isNaN(primaParola)){
  primaParola = prompt('inserisci una parola');
}

// inserire seconda parola
var secondaParola = prompt('inserisci una seconda parola');
while (secondaParola == ' ' || !isNaN(secondaParola)){
  secondaParola = prompt('inserisci una seconda parola');
}

// confronta PAROLE
if (primaParola.length > secondaParola.length){
    console.log(primaParola + '-' + secondaParola);
    console.log('La prima parola inserita è più lunga');
} else if (primaParola.length < secondaParola.length){
    console.log(secondaParola + '-' + primaParola);
    console.log('La seconda parola inserita è più lunga');
} else{
    console.log('le parole si equivalgono');
}
