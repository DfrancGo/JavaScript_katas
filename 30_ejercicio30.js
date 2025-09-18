const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
];

//Se puede hacer de esta forma como el ejercicio 29 pero también existe otra forma que no implica conocer los generos de cada canción
/* const genreMusic = { 
  "Metal": [],
  "Rock": [],
  "Pop": [],
  "Country": [],
  "Grunge": []
};

for (const song of tracks) {
    if (song.genre === "Metal") {
        genreMusic["Metal"].push(song.title);
    }
    else if (song.genre === "Rock") {
        genreMusic["Rock"].push(song.title);
    }
    else if (song.genre === "Pop") {
        genreMusic["Pop"].push(song.title);
    }
    else if (song.genre === "Country") {
        genreMusic["Country"].push(song.title);
    }
    else {
        genreMusic["Grunge"].push(song.title);
    }
}
console.log(genreMusic) */

const genreMusic = {}; //Objeto vacío para agrupar por género

for (const song of tracks) {
  const genre = song.genre; //Variable que será igual al genero del objeto que recorremos
    if (!genreMusic[genre]) { // Si el género no existe aún como clave
        genreMusic[genre] = []; //Lo inicializamos con un array vacío dentro del objeto vacío genreMusic
  }
    genreMusic[genre].push(song.title); // Añadimos el título de la canción al array correspondiente que se ha creado en la condición anterior
}

console.log("Canciones agrupadas por género:", genreMusic);
