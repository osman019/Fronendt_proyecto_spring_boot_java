export function cambiarImagen(){
    let indiceActual = 0
    const imagenElemento = document.getElementById("imagenCambia")

    function cambiarImagen() {
    indiceActual = (indiceActual + 1) % imagenes.length
    imagenElemento.src = imagenes[indiceActual]
    }

    setInterval(cambiarImagen, 2000)
} 
