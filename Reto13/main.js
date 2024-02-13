
const Receta = {
    nombre: "Lentejas",
    dificultad: "fácil",
    tiempo: 30,
    ingredientes: ["lentejas", "chorizo", "cebolla", "aceite", "sal", "agua"],
}

const print = (Receta) => {
    console.log("Receta de " + Receta.nombre)
    console.log("Tiempo: " + Receta.tiempo + " minutos")
    console.log("Ingredientes: ")
    for (elemento in Receta.ingredientes) {
        console.log(Receta.ingredientes[elemento])
    }
}

print(Receta)