const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
// Criamos 3 Const que acessa o elemento do html pelo id

// Const relogio com uma função de Tempo
const relogio = setInterval(function time() {
    // let da data de hoje
    let datetoday = new Date();
    let hr = datetoday.getHours();
    let min = datetoday.getMinutes();
    let s = datetoday.getSeconds();

    // se o elemento for menor que 10 ai o 0 fica antes do numero
    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;

    // o elemento text Content é usado para alterar o texto
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
})
