// labels

let unidades = 0;
let decenas = 0;

//Ejemplo sin etiquetas
while (true) {
    while (true) {
        console.log(`El numero actual es: ${decenas}${unidades}`)
        unidades++
        if (unidades === 10) {
            unidades =0
            break
        }
    }
    decenas++
    if (decenas === 2){
        console.log(`El numero actual es: ${decenas}${unidades}`)
        break
    }
}

//Ejemplo con etiquetas
unidades = 0;
decenas = 0;

bucleDecenas: while (true) {
    bucleUnidades: while (true) {
        console.log(`El numero actual es: ${decenas}${unidades}`)
        unidades++
        if (unidades === 10) {
            unidades =0
            break bucleUnidades
        }
        if (decenas === 2){
            break bucleDecenas
        }
    }
    decenas++
}