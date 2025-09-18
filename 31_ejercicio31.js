const artists = [
  { name: 'Kurt Cobain', influences: ['The Beatles', 'Pixies', 'Lead Belly'] },
  { name: 'David Bowie', influences: ['Little Richard', 'Chuck Berry', 'The Velvet Underground'] },
  { name: 'Eddie Vedder', influences: ['The Who', 'Neil Young', 'Jim Morrison'] },
  { name: 'Freddie Mercury', influences: ['Liza Minnelli', 'Jimi Hendrix', 'Aretha Franklin'] },
  { name: 'John Lennon', influences: ['Elvis Presley', 'Chuck Berry', 'Buddy Holly'] }
];

for (const artist of artists) { //Recorre el array por cada artista
  for (const influence of artist.influences) { //Recorre cada elemento del array influences
    console.log(`${artist.name} -> ${influence}`); //Muestra el artista en el que está y lo junta con la influencia que está recorriendo en este segundo bucle
  }
}
