
const Persona = {
    nombre: "Javier",
    apellidos: "Gallego Garrido",
    edad: 40,
    direccion: "Calle Invent 666",
    ciudad: "Valencia",
    pais: "España"
}

const datos = (Persona) => {
    console.log(Persona.nombre + " " + Persona.apellidos)
}

datos(Persona)