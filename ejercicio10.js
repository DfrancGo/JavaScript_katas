const numbers = [12, 21, 38, 5, 45, 37, 6];
const segunda_muestra = [10, 10, 10, 10];
function average(numberList) { // Función para calcular el promedio de números en un array
    let sum = 0; // Inicializamos la suma en 0
    for (let number of numberList) { // Recorremos cada número en el array
        sum += number; // Sumamos el número actual al siguiente hasta recorrer todo el array
    }
    let promedio = sum/numberList.length; //Creamos una variable con el resultado del promedio que es igual al total entre el tamaño de la muestra
    console.log ("El promedio es igual a: " + promedio); //Imprime el resultado
}
average(numbers);
average(segunda_muestra);
