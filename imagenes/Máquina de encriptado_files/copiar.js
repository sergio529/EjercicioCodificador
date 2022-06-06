
function botonCopiar(texto) {
    let copiar = texto;
    texto.select();
    document.execCommand("copy")
}