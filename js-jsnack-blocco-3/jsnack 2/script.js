// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

// Crea due array che hanno un numero di elementi diversi.
var arrayUno = [' ', ' ', ' ', ' ', ' ', ' ', ' '];
var arrayDue = [' ', ' '];

while (!(arrayUno.length == arrayDue.length)) {
  if (arrayUno < arrayDue) {
    arrayUno.push(' ');
  }else if(arrayDue < arrayUno ) {
    arrayDue.push(' ');
  }

}
console.log(arrayUno);
console.log(arrayDue);
console.log('finito');
