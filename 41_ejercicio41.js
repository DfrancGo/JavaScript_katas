function rollDice(faces) {
  if (faces < 1 || !Number.isInteger(faces)) {
    console.log("Por favor, introduce un número entero mayor que 0.");
    return
  }
  const result = Math.floor(Math.random() * faces) + 1; //math.floor redondea hacia abajo, math random da un número aleatorio entre 0 y 1 y es por esto que despues de multiplicarlo por el número de caras, le sumamos 1 
  console.log(`Has sacado un ${result} en un dado de ${faces} caras.`);
}

rollDice(0);
rollDice(4);
rollDice(6);
rollDice(8);
rollDice(10);
rollDice(12);
rollDice(20);
