const nombre = "Jehider Pinto";
const edad = 25;
const isDesarrolladr = false;
const fecha_nacimiento= new Date("september 4 1997");
const libro = {
    titulo: 'Breve historia del tiempo',
    autor: 'Stephen Hawking',
    'año': new Date("1989").getFullYear(),
    url : 'https://antroposmoderno.com/word/Stephen_Hawking_Historia_del_Tiempo.pdf'
};

const lista = [nombre, edad, isDesarrolladr, fecha_nacimiento, libro]

console.log(lista)