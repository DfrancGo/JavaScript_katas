const movies = [
  {
    title: "Bracula: Condemor II",
    duration: 192,
    categories: ["comedia", "aventura"],
  },
  {
    title: "Spider-Man: No Way Home",
    duration: 122,
    categories: ["aventura", "acción"],
  },
  {
    title: "The Voices",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "Shrek",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

const categorias = [];

for (const pelicula of movies) { //Primer bucle para recorrer el array
  for (const categoria of pelicula.categories) { //Segundo bucle para recorrer la clave categories
    if (!categorias.includes(categoria)) { //Si el array 'categorias' no incluye la categoría
      categorias.push(categoria); //Agregarlo al array
    }
  }
}
console.log(categorias);
