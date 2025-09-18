const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

let fruitIndex = 0; //Para recorrer el array sin repetir frutas

for (let i = 0; i < foodSchedule.length; i++) {
    if (foodSchedule[i].isVegan == false) { //Si la clave 'isVegan' es falsa
        foodSchedule[i].name = fruits[fruitIndex]; //Cambiamos el 'foodSchedule.name' por el elemento en el indice 0 del array fruits
        foodSchedule[i].isVegan = true; //Porque ahora es fruta
        fruitIndex++; //Acá aumenta 1 posición y se repite el ciclo al encontrar otro 'isVegan=false'
    }
}

console.log(foodSchedule);
