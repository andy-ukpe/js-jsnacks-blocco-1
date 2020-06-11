// Crea due tag div con due id diversi: un div avrà
// il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id
// rosso i numeri dispari e in verde i numeri pari.

var boxRosso = document.getElementById('red');
var boxGreen = document.getElementById('green');
boxRosso.style.color = 'red';
boxGreen.style.color = 'green';
// creazione array di numeri
var arrayNumeri = ['2', '43', '76', '98', '42', '40', '31', '63', '88'];
// creazione array numeri pari o dispari
var arrayNumeriPari = [];
var arrayNumeriDispari = [];
for (var i = 0; i < arrayNumeri.length; i++) {
  if(arrayNumeri[i] % 2 == 0){
    arrayNumeriPari.push(arrayNumeri[i]);
    boxRosso.innerHTML += arrayNumeri[i] + '<br>';
  }else{
    arrayNumeriDispari.push(arrayNumeri[i]);
    boxGreen.innerHTML += arrayNumeri[i] + '<br>';
  }
}



  console.log(arrayNumeri);
  console.log(arrayNumeriPari);
  console.log(arrayNumeriDispari);
