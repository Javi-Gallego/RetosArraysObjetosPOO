let arrayUno = [1, 2, 3]
let arrayDos = [4, 5, 6]
let arrayTres = []

for (let i = 0; i <= 2; i++) {
    let quita1 = arrayUno.shift()
    let quita2 = arrayDos.shift()
    arrayTres.push(quita1)
    arrayTres.push(quita2)
}

console.log(arrayUno)
console.log(arrayDos)
console.log(arrayTres)