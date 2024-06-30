import { listarVideos } from './conexionAPI.js'; // Asumiendo que este archivo está en el mismo directorio

const lista = document.querySelector("[data-lista]")

function crearVideo(titulo, descripcion, url, imagem) {
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `<iframe width="100%" height="72%" src="${url}"
                title=${titulo}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="descripcion-video">
                <img src=${imagem}>
                <h3>${titulo}</h3>
                <p>${descripcion}</p>
            </div>
    `;
    return video;
}
async function listavideosAlura() {
    try {
        const listaAPI = await listarVideos();
        listaAPI.map(video => {
            const resultado = crearVideo(video.titulo, video.descripcion, video.url, video.imagem)
            lista.appendChild(resultado)
        }
        )

    } catch (error) {
        console.log(error)
        console.error('Error en la creación del video:', error);
    }

}

listavideosAlura()
