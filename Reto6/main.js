
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arraypar = []
let arrayimpar = []

for (const numero in array) {
    if (array[numero] % 2 == 0) {
        arraypar.push(array[numero])
    } else {
        arrayimpar.push(array[numero])
    }
}

console.log(arraypar+","+arrayimpar)