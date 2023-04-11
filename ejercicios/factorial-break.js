// factorial-break

let fac = 1
let i = 1

while (true) {
    fac = fac*i
    if (i === 10) {
        break
    }
    i++
}
console.log(fac)