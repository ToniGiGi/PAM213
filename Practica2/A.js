const persona = {
    nombre: "Ivan Isay",
    edad: 37,
    direccion: {
        ciudad: "Qro",
        Pais: "MX"
    }
}

const { nombre, edad, direccion: { ciudad } } = persona;

console.log("Me llamo " +nombre, "Tengo " +edad, "y vivo en " +ciudad);  

