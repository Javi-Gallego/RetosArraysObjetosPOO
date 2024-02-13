
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log("Los números mayores que 5 son: ")

for (numero in array) {
    if (array[numero] > 5) {
        console.log(array[numero] + " ")
    } 
}