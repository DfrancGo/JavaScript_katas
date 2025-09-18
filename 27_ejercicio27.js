const cartoons = [
  { name: 'Bugs Bunny', debut: 1938 },
  { name: 'SpongeBob SquarePants', debut: 1999 },
  { name: 'Tom and Jerry', debut: 1940 },
  { name: 'Mickey Mouse', debut: 1928 },
  { name: 'Scooby-Doo', debut: 1969 },
  { name: 'The Flintstones', debut: 1960 },
  { name: 'Batman: The Animated Series', debut: 1992 },
  { name: 'The Simpsons', debut: 1989 },
  { name: 'Pokémon', debut: 1997 },
  { name: "Dexter's Laboratory", debut: 1996 }
];

let yearOld = cartoons[0].debut //Se crea una variable que almacena sólo la fecha de debut
let oldestCartoon = cartoons[0].name //Se crea una variable que almacena sólo el nombre

for (let i = 0; i < cartoons.length; i++) { //Recorremos el array
if (cartoons[i].debut < yearOld) { //Si el año de debut es menor que el guardado anteriormente...
    oldestCartoon = cartoons[i].name; //Se almacena el nombre del objeto que pertenece al array
    yearOld = cartoons[i].debut; // Se almacena el año de debut
  }
}
console.log("La serie más antigua es ", oldestCartoon,", y se estrenó en el año ", yearOld);