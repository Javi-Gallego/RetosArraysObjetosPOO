
let ordenCarrera = ["Fernando", "Luis", "Miguel", "Pedro", "Sofia", "Maria", "Juan", "Carlos", "Javi"]

let campeon, subcampeon, resto

[campeon, subcampeon, ...resto] = ordenCarrera

console.log(`El campeón es ${campeon}, el subcampeón es ${subcampeon} y el resto de participantes son ${resto}`)