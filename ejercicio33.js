
const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};

function getCapital(country) {
    if (capitals[country]) { //Accedemos al valor del objeto y evaluamos si existe en el objeto 'capitals'
        return `La capital de ${country} es ${capitals[country]}.`;
    } else {
        return `Lo siento, no tengo información sobre la capital de ${country}.`;
  }
}
console.log(getCapital("Colombia"));
console.log(getCapital("Ireland"));
