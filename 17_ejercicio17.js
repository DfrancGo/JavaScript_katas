const alien = {
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'Unknown',
    weight: 180
};

for (const property in alien) {
    console.log("la propiedad " + property + " tiene como valor " + alien[property]);
}