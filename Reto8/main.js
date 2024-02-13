
let javascript1 = ["DOM", "BOM", "Funciones", "Arrays"]
let javascript2 = ["Objetos", "Arrays", "ParseInt"]

const repetidos = (array1, array2) => {
    for (elemento in array1) {
        if (array2.includes(array1[elemento])) {
            console.log("El elemento '" + array1[elemento] + "' está en ambos arrays")
        }
    }
}

repetidos(javascript1, javascript2)