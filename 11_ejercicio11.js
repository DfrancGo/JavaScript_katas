const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];
function averageWord(list) {
    let sum = 0 //Contador de suma que empieza desde 0
    for (const item of list) { //Bucle que recorre cada elemento del array
        if (typeof item === "string") {//si el tipo de dato es estrictamente igual a un string
            sum += item.length; //Acá se convierte el string en un número igual a su longitud y se suma
        } else { //Si el tipo de dato es distinto se suma en la caja item
        sum += item;}
    }
    let average = sum / list.length; //se crea la variable promedio con la operación que debe hacer
    console.log("El promedio es: "+average); //Imprime la frase y el resultado
}
averageWord (mixedElements)