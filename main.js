function tocaSom(idDoAudio) {
   const elemento = document.querySelector(idDoAudio);

    if (elemento && elemento.localName === "audio") {
        elemento.play();
    } else {
        console.log("Elemento não encontrado")
    }
}

const listaDeTeclas = document.querySelectorAll(".tecla");

for (let index = 0; index < listaDeTeclas.length; index++) {
    const tecla = listaDeTeclas[index];
    const instrumento = tecla.classList[1];
    const idAudio = "#som_" + instrumento;

    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(event) {
        if (event.code === "Enter" || event.code === "Space") {
            tecla.classList.add("ativa","active");
        }
    }

    tecla.onkeyup = function(event) {
        if (event.code === "Enter" || event.code === "Space") {
            tecla.classList.remove("ativa","active");
        }
    }


}