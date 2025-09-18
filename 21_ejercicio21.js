const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

let kid = [];
let adult = []; //Los dos arrays vacíos donde vamos a almacenar los mayores y menores de edad

for (const user of users) { //Bucle for of que va a recorrer cada elemento del array 
    if (user.years >= 18) { //Si el objeto dentro del array, en la clave 'years' es mayor o igual a 18
        adult.push(user) //Agregar al array vacío 'adult'
    } else { //De lo contrario es menor, así que se agrega al array 'kid'
        kid.push(user)
    }
}

console.log("Usuarios mayores de edad:", adult.map(user => user.name)); //El .map recorre cada elemento del array y aplica una función al mismo pero no modifica el array; la función flecha que se ejecuta hace que por cada elemento del array devuelva sólo el atributo de la clave name
console.log("Usuarios menores de edad:", kid.map(user => user.name));

/* console.log("El array no se modificó con la función flecha gracias al .map", adult);
console.log("El array no se modificó con la función flecha gracias al .map", kid); */