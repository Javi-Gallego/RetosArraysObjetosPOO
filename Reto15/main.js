
class Receta {
  constructor(nombre, dificultad, tiempo, ingredientes) {
    this._nombre = nombre;
    this._dificultad = dificultad;
    this._tiempo = tiempo;
    this._ingredientes = ingredientes;
  }
}

const Lentejas = new Receta("Lentejas", "fácil", 40, ["lentejas", "chorizo", "cebolla", "aceite", "sal", "agua"]);
const Tortilla = new Receta("Tortilla", "fácil", 10, ["huevos", "sal", "aceite"]);
const Macarrones = new Receta("Macarrones", "fácil", 30, ["macarrones", "carne picada", "cebolla", "tomate", "aceite", "sal", "agua"]);

let arrayRecetas = [Lentejas, Tortilla, Macarrones];

const print = (arrayRecetas) => {
    for (receta in arrayRecetas){
        console.log("Receta de " + arrayRecetas[receta]._nombre)
        console.log("Tiempo: " + arrayRecetas[receta]._tiempo + " minutos")
        console.log("Ingredientes: ")
        for (elemento in arrayRecetas[receta]._ingredientes) {
            console.log(arrayRecetas[receta]._ingredientes[elemento])
        }
    }
   
}

print(arrayRecetas)