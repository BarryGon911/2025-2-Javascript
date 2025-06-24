// Práctica para casa:
// Imprimir números pares del 1 al 100
const { ask } = require('../helpers/input');

async function main() {

function imprimirPares(limite) {
    console.log("Los números pares del 1 al " + limite + " son:");
    for (let i = 2; i <= limite; i = i+ 2) {
        console.log(i);
    }
}

function main() {
    let limite = 100;
    imprimirPares(limite);
}

main();
}

main();
