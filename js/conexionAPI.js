const url = "http://localhost:3000/videos"
async function listarVideos() {
    try {
        const conexion = await fetch(url);
        const datos = await conexion.json()
        return datos
    }
    catch (error) {
        console.log(error);
        throw new Error('Error al listar videos: ' + error.message);
    }
}

async function crearVideo({ titulo, descripcion, url, imagem }) {
    try {
    const conexion = await fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            titulo,
            descripcion,
            url,
            imagem
        })
    });
    if (!conexion.ok) {
        throw new Error('Error al crear el video: ' + conexion.status);
    }
    const data = await conexion.json()
    return data;
}
catch (error) {
    console.error('Error en la creación del video:', error);
    throw error; // Propagar el error para manejarlo en otro lugar si es necesario
}}

export { listarVideos, crearVideo };