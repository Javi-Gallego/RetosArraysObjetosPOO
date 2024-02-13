let Recetas = [
  {
    nombre: "Lentejas",
    dificultad: "fácil",
    tiempo: 30,
    ingredientes: ["lentejas", "chorizo", "cebolla", "aceite", "sal", "agua"]
  },
  {
    nombre: "Tortilla",
    dificultad: "fácil",
    tiempo: 10,
    ingredientes: ["huevos", "sal", "aceite"]
  },
  {
    nombre: "Macarrones",
    dificultad: "fácil",
    tiempo: 30,
    ingredientes: ["macarrones", "carne picada", "cebolla", "tomate", "aceite", "sal", "agua"]
  },
];

const print = (Recetas) => {
    for (receta in Recetas){
        console.log("Receta de " + Recetas[receta].nombre)
        console.log("Tiempo: " + Recetas[receta].tiempo + " minutos")
        console.log("Ingredientes: ")
        for (elemento in Recetas[receta].ingredientes) {
            console.log(Recetas[receta].ingredientes[elemento])
        }
    }
   
}

print(Recetas)