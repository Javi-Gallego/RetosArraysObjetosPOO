
let personas = [ {nombre: "Juan", edad: 35}, {nombre: "Carlos", edad: 30}, {nombre: "Ana", edad: 20}]

const datos = (personas) => {
    console.log("El nombre de todas las personas del array es: ")

    for (elemento in personas) {
        console.log(personas[elemento].nombre)
    }
}

datos(personas)