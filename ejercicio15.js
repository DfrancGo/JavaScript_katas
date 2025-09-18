const products = [
  "Camiseta de Metallica",
  "Pantalón vaquero",
  "Gorra de beisbol",
  "Camiseta de Basket",
  "Cinturón de Orión",
  "AC/DC Camiseta",
];

for (let i = 0; i < products.length; i++) { //Recorremos el array
    if (products[i].includes("Camiseta")) { //Si dentro de la clave del array está 'Camiseta'
        console.log(products[i]); //imprimimos el producto que tiene esa palabra
    }
}
