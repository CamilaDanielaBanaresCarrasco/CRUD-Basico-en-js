//ES6
import fs from 'fs';
import { Persona } from './nombre.js';
//ES5
//require

// CRUD nombres

// Create con cadenas
const createCad = (persona) => {
    let datos = fs.readFileSync('EstamosProbando.txt', 'utf-8');
    datos = datos + '\n' + persona.nombre;
    fs.writeFileSync('EstamosProbando.txt', datos);
}

// Create con arreglos
const createArr = (persona) => {
    let datos = fs.readFileSync('EstamosProbando.txt', 'utf-8');
    datos = datos.replace('\r', ''); // limpiando la cadena de \r y dejando solamente \n
    datos = datos.split('\n');
    datos.push(persona.nombre);
    datos = datos.join('\n');
    fs.writeFileSync('EstamosProbando.txt', datos);
}

// Read
const readAll = () => {
    let datos = fs.readFileSync('EstamosProbando.txt', 'utf-8');
    datos = datos.replace('\r', '');
    datos = datos.split('\n');
    console.log(datos);
    return datos;
}

// Update
const update = (nombreAntiguo, nombreNuevo) => {
    let datos = fs.readFileSync('EstamosProbando.txt', 'utf-8');
    datos = datos.replace('\r', '');
    datos = datos.split('\n');
    // indexOf()
    const indiceCambiar = datos.indexOf(nombreAntiguo);
    // splice(indiceDesde, cantidad, valor)
    datos.splice(indiceCambiar, 1, nombreNuevo);
    datos = datos.join('\n');
    fs.writeFileSync('EstamosProbando.txt', datos);
}

// Delete
const deleteName = (nombreEliminar) => {
    let datos = fs.readFileSync('EstamosProbando.txt', 'utf-8');
    datos = datos.replace('\r', '');
    datos = datos.split('\n');
    const indiceCambiar = datos.indexOf(nombreEliminar);
    datos.splice(indiceCambiar, 1);
    datos = datos.join('\n');
    fs.writeFileSync('EstamosProbando.txt', datos);
}
readAll();
//deleteName('undefined');
