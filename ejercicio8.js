const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(stringList) {
    let longestWord = ""; // Inicializamos con una variable vacía
    for (const string of stringList) { // Recorremos cada string en el array
        if (string.length > longestWord.length) { //Comparamos la longitud de la cadena actual con la más larga encontrada hasta ahora
            longestWord = string; // Si la cadena actual es más larga, la asignamos a longestWord
        }
    }
    console.log(longestWord); // Imprimimos la cadena más larga encontrada
}
findLongestWord (avengers); // Llamamos a la función con la lista de avengers