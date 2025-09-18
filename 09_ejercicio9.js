const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) { // Función para sumar números en un array
    let sum = 0; // Inicializamos la suma en 0
    for (const number of numberList) { // Recorremos cada número en el array
        sum += number; // Sumamos el número actual a la suma total
    }
    console.log(sum);// Imprimimos la suma total
}
sumNumbers(numbers);