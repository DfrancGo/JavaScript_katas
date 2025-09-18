const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];

function repeatCounter(list) {
    const counter = {}; //Variable vacía que servirá como contador
    for (let i = 0; i < list.length; i++) { //Recorrer el array
        const element = list[i]; //Guardamos el elemento en el que estamos
        if (counter[element]) { //Si el elemento ya existe en el contador se suma
            counter[element]++;
        } else { //si no se repite asigna el valor 1
        counter[element] = 1;
        }
  }
    return counter;
}
console.log(repeatCounter(words));
