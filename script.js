let campos = document.querySelectorAll('.campo');
let span = document.querySelectorAll('#span');
let botao = document.getElementById('botao');
botao.addEventListener('click', () => {
    campos.forEach((item, indice) => {
        if (campos[indice].value !== '') {
            campos[indice].classList.remove("borda-vermelha")
            span[indice].classList.add("span")
            campos[indice].classList.add("borda-verde")
        }
        else {
            campos[indice].classList.add("borda-vermelha")
            span[indice].classList.remove("span")
        }
    });
});





