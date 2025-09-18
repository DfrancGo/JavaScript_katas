const starWarsMovies = [
  { title: 'A New Hope', releaseYear: 1977 },
  { title: 'The Empire Strikes Back', releaseYear: 1980 },
  { title: 'Return of the Jedi', releaseYear: 1983 },
  { title: 'The Phantom Menace', releaseYear: 1999 },
  { title: 'Attack of the Clones', releaseYear: 2002 },
  { title: 'Revenge of the Sith', releaseYear: 2005 },
  { title: 'The Force Awakens', releaseYear: 2015 },
  { title: 'The Last Jedi', releaseYear: 2017 },
  { title: 'The Rise of Skywalker', releaseYear: 2019 },
  { title: 'Rogue One', releaseYear: 2016 },
  { title: 'Solo', releaseYear: 2018 }
];

const groupedByDecade = { //Creamos un objeto vacío con clases predefinidas que corresponden a la decada de estreno
  "1970s": [],
  "1980s": [],
  "1990s": [],
  "2000s": [],
  "2010s": []
};

for (const movie of starWarsMovies) { //Bucle para recorrer los objetos del objeto
  const year = movie.releaseYear; //Guardamos el año de estreno 
  if (year >= 1970 && year < 1980) { //Si es mayor o igual a 1970 Y menor que 1980

    groupedByDecade["1970s"].push(movie.title); //Se añade a la clave 1970s y pone dentro los titulos de las peliculas siendo un array

  } else if (year >= 1980 && year < 1990) {

    groupedByDecade["1980s"].push(movie.title);

  } else if (year >= 1990 && year < 2000) {

    groupedByDecade["1990s"].push(movie.title);

  } else if (year >= 2000 && year < 2010) {

    groupedByDecade["2000s"].push(movie.title);

  } else if (year >= 2010 && year < 2020) {

    groupedByDecade["2010s"].push(movie.title);
  }
}

console.log("Películas agrupadas por década: ", groupedByDecade);

