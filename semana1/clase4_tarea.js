/*
Ejercicio: Pedir al usuario su fecha de nacimiento

Instrucciones:
1. Mostrar en pantalla los días equivalentes a la edad actual del usuario
2. Mostrar en pantalla los meses equivalentes a la edad actual del usuario
3. Mostrar los años que tiene el usuario.
*/

const { ask } = require('../helpers/input');

function diffDays(actualDate, birthDate) {
  const diff = actualDate - birthDate;
  const edadEnDias = Math.floor(diff / (1000 * 60 * 60 * 24));
  return edadEnDias;
}

function diffMonths(actualDate, birthDate) {
  const years = actualDate.getFullYear() - birthDate.getFullYear();
  const months = actualDate.getMonth() - birthDate.getMonth();
  const totalMonths = years * 12 + months;

  // Ajustar si el día actual es menor que el día de nacimiento
  if (actualDate.getDate() < birthDate.getDate()) {
    return totalMonths - 1;
  }

  return totalMonths;
}

function diffYears(actualDate, birthDate) {
  let years = actualDate.getFullYear() - birthDate.getFullYear();

  // Ajustar si no ha cumplido años aún este año
  if (
    actualDate.getMonth() < birthDate.getMonth() ||
    (actualDate.getMonth() === birthDate.getMonth() && actualDate.getDate() < birthDate.getDate())
  ) {
    years--;
  }

  return years;
}

async function main() {
  const actualDate = new Date();

  const birthDateDay = await ask("¿Cuál es el día de tu fecha de nacimiento?");
  const birthDateMonth = await ask("¿Cuál es el mes de tu fecha de nacimiento?");
  const birthDateYear = await ask("¿Cuál es el año de tu fecha de nacimiento?");
  const birthDate = new Date(`${birthDateYear}-${birthDateMonth}-${birthDateDay}`);

  console.log("\nHaz vivido aproximadamente:");
  console.log(`${diffDays(actualDate, birthDate)} días`);
  console.log(`${diffMonths(actualDate, birthDate)} meses`);
  console.log(`${diffYears(actualDate, birthDate)} años`);
}

main();