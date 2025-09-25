function simularPeticionApi() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Datos de la API recibidos");
        }, 5000);
    });
}

async function obtenerDatos() {
    const datos = await simularPeticionApi();
    console.log(datos);
}       

obtenerDatos();