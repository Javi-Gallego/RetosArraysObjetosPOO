
let javascript1 = ["DOM", "BOM", "Funciones", "Arrays"]
console.log(javascript1)

javascript1.map(
    (elemento, indice) => {
        if (elemento === "DOM") {
            javascript1[indice] = "Objetos"
        }
        if (elemento === "Arrays") {
            javascript1[indice] = "ArraysDifíciles"
        }
        if (elemento === "Funciones") {
            console.log(`El índice de "Funciones" es: ${indice}`)
        }    
    }
)

console.log(javascript1)

let newArray = javascript1.slice(-2)
console.log(newArray)