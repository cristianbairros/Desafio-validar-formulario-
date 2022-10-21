let campos = document.querySelectorAll('#input');
let span = document.querySelectorAll('#span');
let botao = document.getElementById('botao');
botao.addEventListener('click', validarForm);

function validarForm() {
    for (let i = 0; i < campos.length; i++) {
        if (campos[i].value.length >= 6) {
            campos[i].classList.add("borda-verde")
        }
        else{
            campos[i].classList.add("borda-vermelha")
            span[i].classList.remove("span")
        }
    }
}







