const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
    
function removeDuplicatesFromList(list) {
    let uniqueList = []; //Acá se almacenan los elementos que no están repetidos
    let removedItems= []; //Acá se almacenan los que vamos a eliminar
    for (let i = 0; i < list.length; i++) { //Recorre el array desde la posición 0 hasta la final con incrementos de 1 en 1
        let current = list[i]; //Guarda el valor actual del array que estamos recorriendo para luego compararlo
        let isDuplicate = false; //Creamos un booleano para saber si current ya está en uniqueList
        for (let j = 0; j < uniqueList.length; j++) { //Este segundo bucle recorre el array uniqueList y lo comparamos con current
            if (uniqueList[j] === current) { //Si el valor de uniqueList coincide con el de current
            isDuplicate = true;//El booleano cambia de valor
            break;//Salimos del bucle porque sabemos que el valor es duplicado y se para
            }
        }
        if (isDuplicate) { //Si está duplicado se agrega al array vacio 'removedItems'
            removedItems.push(current);
        } else { //Si no está duplicado se agrega al array vacio 'UniqueList'
            uniqueList.push(current);
        }
    }
    return { //Nos permite usar el resultado de la función fuera de la misma
        survivors: uniqueList,
        killed: removedItems
    } 
}
//En caso de querer los dos arrays fuera de la función para hacer alguna otra cosa:
let result = removeDuplicatesFromList(duplicates); //Como la función nos devuelve dos resultados, creamos una variable con la función aplicada al array inicial
console.log("Nuevo array sin los elementos duplicados ", result.survivors); //Imprimimos por consola el array con los elementos repetidos eliminados 
console.log("Array con los elementos eliminados ", result.killed); //Imprimimos por consola el array con los elementos eliminadosç

/*Otra manera de hacerlo:
function removeDuplicates(list){
    const uniques = [] //Hacemos un array vacío que va a guardar los elementos unicos
    for (const element of list){
        if(!uniques.includes(element)){ //si uniques no incluye el elemento que se está recorriendo en esa iteración
        uniques.push(element) //Se agrega al array uniques
        }
    }
    console.log(uniques)
}
removeDuplicates(duplicates)

 */