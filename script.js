const botonAumentar = document.getElementById("aumentar")
const botonDisminuir = document.getElementById("disminuir")
const botonRestablecer = document.getElementById("restablecer")
const mostrarValorContador = document.getElementById("contador")

let contador = 0;

botonAumentar.addEventListener("click", function aumentarValor(){
     contador = contador + 1;
     actualizarContador();
})

botonDisminuir.addEventListener("click", function disminuirValor(){
    contador = contador -1;
    actualizarContador();
})

botonRestablecer.addEventListener("click", function restablecerValor () {
    contador = 0;
    actualizarContador();
} )
function actualizarContador () {
    mostrarValorContador.textContent = contador;
}