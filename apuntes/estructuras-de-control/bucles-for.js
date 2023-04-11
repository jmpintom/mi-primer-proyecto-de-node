//Bucles For
//____________________________________________________________________

for (let i = 0; i < 10; i++) {
    console.log(i)
};

let lista = [1,2,4,8,16,32,64,128,256,512,1048];
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i])
};

// Estructura for ... of
for (let valor of lista) {
    console.log(valor)
};

// Estructura forEach
lista.forEach(valor => {
    console.log(valor)
})

// Estructura for ... in
let persona = {
    nombre: 'Jehider',
    apellido : 'Pinto',
    edad : 25,
    isDeveloper: false
}

for (let propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad])
}