const textsaludo = document.getElementById('saludo');
const texthora = document.getElementById('hora');
const textfecha = document.getElementById('fecha');
const textfrase = document.getElementById('frase');

const fecha = new Date();

const dia = fecha.getDate();
const mes = fecha.getMonth() + 1;

const hora = fecha.getHours();
const minutos = fecha.getMinutes();

const hora12 = hora % 12 || 12;

texthora.innerText = `${hora12}:${String(minutos).padStart(2, '0')}`;


if (hora < 12) {
    textsaludo.innerText = "☀️ Buenos días";
    textfrase.innerText = "¡Hoy es un buen día para disfrutar algo rico!";
} else if (hora < 20) {
    textsaludo.innerText = "🌤️ Buenas tardes";
    textfrase.innerText = "¡Hoy es un buen día para disfrutar algo rico!";
} else {
    textsaludo.innerText = "🌙 Buenas noches";
    textfrase.innerText = "¡Hoy es un buen día para disfrutar algo rico!";
}