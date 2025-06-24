// 🏠 Práctica para casa:
// Contar cuántos de una lista de edades pueden votar
//
// Instrucciones:
// Crea un arreglo de edades (pedirlo al usuario).
//
// Recorre el arreglo.
//
// Cuenta cuántos tienen 18 años o más.
//
// Muestra el total.

const { ask } = require('../helpers/input');

async function main() {
    let edades = [];
    let mayores = 0;

    async function obtenerEdades() {
        console.log ('Escribe las edades a analizar, una por una. Escribe "fin" cuando termines. \n');
        while (true) {
             const respuesta = await ask ('Edad: '); 
            if (respuesta.toLowerCase() === 'fin') break;
            edades.push(respuesta);
        }
        for (let i = 0; i < edades.length; i++) {
             if (edades[i] >= 18) {
                mayores++;
            }
        }
    }

    console.log('\nEdades ingresadas: ', edades);
    console.log ('El total de mayores de edad es de: ', mayores);
    
    obtenerEdades();
}

main();