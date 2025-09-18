const mutants = [
  { name: "Wolverine", power: "regeneration" },
  { name: "Magneto", power: "magnetism" },
  { name: "Professor X", power: "telepathy" },
  { name: "Jean Grey", power: "telekinesis" },
  { name: "Rogue", power: "power absorption" },
  { name: "Storm", power: "weather manipulation" },
  { name: "Mystique", power: "shape-shifting" },
  { name: "Beast", power: "superhuman strength" },
  { name: "Colossus", power: "steel skin" },
  { name: "Nightcrawler", power: "teleportation" },
  { name: "Psylocke", power: "telepathy"}
];

function findMutantByPower(text) { //Así va a detectar si lo buscamos por poder o nombre
  let found = false; //Booleano para evaluar si existe el mutante en el array
  // Buscar por nombre
  for (let i = 0; i < mutants.length; i++) { //Recorremos el array
    if (mutants[i].name.toLowerCase() === text.toLowerCase()) { //si el nombre es estrictamente igual
      console.log(`${mutants[i].name} tiene el poder de ${mutants[i].power}`);
      found = true; //El booleano cambia de valor
      // Mostrar otros con el mismo poder
      for (let j = 0; j < mutants.length; j++) {//Recorremos el array de nuevo
        if (
          mutants[j].power === mutants[i].power && //Si el mutante del segundo bucle tiene el mismo poder que el de la primera y
          mutants[j].name !== mutants[i].name //es distinto el nombre 
        ) {
          console.log(`Y ${mutants[j].name} también tiene ese poder.`);//Mostrar el otro mutante que tiene ese poder
        }
      }
      break;
    }
  }
    // Buscar por poder si no se encontró por nombre
    if (!found) { //En caso de no encontrarse
        let foundNames = [];//Array vacío que va a contener los nombres de los mutantes con ese poder
        for (let i = 0; i < mutants.length; i++) {
            if (mutants[i].power.toLowerCase() === text.toLowerCase()) { //Si lo que existe en el array, en el valor de la clave power, coincide con el dato dado
            foundNames.push(mutants[i].name); //Se agrega al array foundNames
            }
    }
    if (foundNames.length > 0) { //Si el total de elementos del array es mayor a 0
      console.log(`Mutantes con el poder ${text.toLowerCase()}: ${foundNames.join(", ")}`); //el '.join(", ")' es para separar ademas de con la coma un espacio despues de esta
    } else {
      console.log(
        `No se encontró ningún mutante con el nombre o poder "${text.toLowerCase()}"`
      );
    }
  }
}
findMutantByPower("Psylocke")
findMutantByPower("gAmBiTo")
findMutantByPower("telEpathY")
findMutantByPower("Magneto")
