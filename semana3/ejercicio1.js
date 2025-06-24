
const { ask } = require('../helpers/input');

async function main() {

  const personas = [
    {
      nombre: "Claudia",
      edad: 34,
      ocupacion: "Desarrollador",
      saludar: function () {
        console.log(`Hola mi nombre es ${this.nombre}`);
      }
    },
    {
      nombre: "Carlos",
      edad: 28,
      ocupacion: "Estudiante",
      saludar: function () {
        console.log(`Hola mi nombre es ${this.nombre}`);
      }
    }
  ];

  for (let i = 0; i < personas.length; i++) {
    personas[i].saludar();
  }

  const alumno1 = {
    nombre: "Yei Yei",
    edad: 18,
    ocupacion: "Estudiante",
    esMayorDeEdad: function () {
      if (this.edad >= 18) { return true; }
      else { return false; }
    },
    mostrarInfo: function () {
      console.log(`Hola soy: ${this.nombre}, tengo ${this.edad}, me dedico a ser: ${this.ocupacion} `);
      if (this.esMayorDeEdad()) {
        console.log("Y SOY MAYOR DE EDAD");
      } else {
        console.log("no puedo votar");
      }
    }
  }

  alumno.mostrarInfo();

}



main();