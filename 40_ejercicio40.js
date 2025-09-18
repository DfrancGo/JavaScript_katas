
const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

const avengersCharacters = [
  "Iron Man",
  "Captain America",
  "Thor",
  "Black Widow",
  "Hulk",
  "Hawkeye",
];

function findArrayIndex(array, text) {
    let index = -1;
    for (let i = 0; i < array.length; i++) {
        if (array[i].toLowerCase() === text.toLowerCase()) {
            index = i;
            console.log(`El personaje "${text}" está en la posición ${index}`)
            break; // Salimos del bucle al encontrarlo
    }
  }
    if (index === -1) {
        console.log(`Lo siento, no existe el personaje "${text}"`);
    }
    return index; //Para poder usarlo fuera de la función y que funcione removeItem; en la consola imprime el indice del elemento buscado
}

findArrayIndex(avengersCharacters, "Hulk");
findArrayIndex(mainCharacters, "REy"); 
findArrayIndex(mainCharacters, "Yoda");

function removeItem(array, text) {
    const index = findArrayIndex(array, text); //Definir está función es lo que hace que muestre la posición del elemento
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (i !== index) {
            newArray.push(array[i]); // Copiamos todos menos el que queremos eliminar
        }
    }
    if (index !== -1) {
        console.log(`El personaje ${text} en la posición ${index} y será eliminado: `, newArray);
    }else {
        console.log(`Lo siento, no puedes remover al personaje ${text} porque no está dentro de la lista`);
    }
    return newArray;
}

removeItem(avengersCharacters, "Ant-man")
removeItem(mainCharacters, "Leia")
removeItem(avengersCharacters, "Vision")
