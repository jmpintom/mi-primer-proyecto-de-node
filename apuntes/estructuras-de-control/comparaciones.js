// Comparaciones

let a = 5;
let b = '5';
let c = 5;
let d = 4;

// Igualdad
//____________________________________________________________________________ 

// == Igualdad debil (solo compara valores)
if (a == b) {
    console.log("5 es igual a 5")
}
if (a == c) {
    console.log("5 es igual a 5")
}
// === Igualdad fuerte (compara el valor y el tipo)
if (a === b) {
    console.log("5 es muy igual a 5")
}
if (a === c) {
    console.log("5 es igual a 5")
}

//desigualdades
//____________________________________________________________________________

//diferente

if (c != d) {
    console.log('c es diferente de d - Débil')
}

if (c !== d) {
    console.log('c es diferente de d - Fuerte')
}
if (a != b) {
    console.log('c es diferente de d - Fuerte')
}
if (a !== b) {
    console.log('c es diferente de d - Fuerte')
}

//mayor y menor que 

let max = 10;
let min = 5;

if (max > min ) {
    console.log("max es mayor que min")
}
if (max >= min ) {
    console.log("max es mayor o igual que min")
}

if (max < min ) {
    console.log("max es mayor o igual que min")
}

if (max <= min ) {
    console.log("max es mayor o igual que min")
}