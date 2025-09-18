const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1961 },
  { name: 'Beast', year: 1963 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 },
  { name: 'Mystique', year: 1978 }
];

/* function findOldestXMen(list) {
  let oldest = list[0]; // Empezamos suponiendo que el primero es el más antiguo
  for (const member of list) { //Recorremos el array con el bucle forOf
    if (member.year < oldest.year) { //si el año es menor al guardado inicialmente
      oldest = member; //lo guardamos en la variable oldest
    }
  }
  return oldest; //Nos permite guardar el resultado de la función fuera de la misma
}

const oldestMember = findOldestXMen(xMen); //Variable que es igual a la función que encuentra el más antiguo
console.log("El miembro más antiguo es:", oldestMember.name, "(", oldestMember.year, ")"); */

//De la siguiente manera el codigo es más corto y todo queda dentro de la función
function findOldestXMen(list) {
  let oldest = list[0];
  for (const member of list) {
    if (member.year < oldest.year) {
      oldest = member;
    }
  }
  console.log("El miembro más antiguo es:", oldest.name, "(", oldest.year, ")");
}
findOldestXMen(xMen);