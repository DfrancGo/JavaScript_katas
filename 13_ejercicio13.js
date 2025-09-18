const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function nameFinder(nameList, element) { //La función recibe como parametro el array y el valor a comprobar
    const position = nameList.indexOf(element); //Se crea una variable que devuelve la posición del elemento en el array
    if (position !==-1) { //Si la posición es distinta de -1 (existe en el array)
        console.log("(True) El elemento está en la posición " + position)
    } else {
        console.log("(False) El elemento no está disponible en esta lista")
    }
}
nameFinder(names, "Xabier")
nameFinder(names, "Speedy Gonzáles")