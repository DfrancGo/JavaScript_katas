const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];


function swap(array, index1, index2) {
  // Verificamos que los índices sean válidos
  if (
    index1 < 0 || index1 >= array.length ||
    index2 < 0 || index2 >= array.length
  ) {
    console.log("Uno o ambos índices están fuera del rango del array.");
    return array;
  } else {
    // Intercambiamos los valores
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    console.log(`El nuevo array intercambiado es: ${array.join(", ")}`);
  }

  return array;
}

swap(fantasticFour, 3, 0)