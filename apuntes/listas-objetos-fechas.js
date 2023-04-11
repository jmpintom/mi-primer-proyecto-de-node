// Listas, arreglos o arrays

const lista1 = [1,'Hola', true, undefined, null];
const lista2 = new Array(1,'Hola', true, undefined, null);
const lista3 = new Array(3);
lista3[0] = "Soy el primer Elemento, index 0"
const lista4 = [lista1, lista2, lista3];

console.log(lista4)

// Objetos

const movil = {
    altura: 10,
    ancho: 5,
    marca: 'Xiaomi',
    isWhite: false,
    contactos: ["Gorka", 'Martín', 'Raul'],
    tarjeta: {
        marca: "Sandisk",
        almacenamiento: 32
    },
    "altura-tarjeta": 4  //definir atributos tambien como string
}

movil.anyo = 2019;          //creacion de nuevo atributo
movil.marca = "Samsung";    //cambio valor de un atributo

console.log(movil.tarjeta.marca)

//Fechas

//Librerias de apoyo --> Moment.js

const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10); // Utilizando los milisegundos
console.log(fecha_milis);

const fecha_cadena = new Date("march 25 2020"); //utilizando cadena
console.log(fecha_cadena);

const fecha_valores = new Date(2022, 0, 15);  //utilizando valores 
console.log(fecha_valores);

const dia = ahora.getDate()
const mes = ahora.getMonth() + 1
const anyo = ahora.getFullYear()

console.log(dia, mes, anyo)