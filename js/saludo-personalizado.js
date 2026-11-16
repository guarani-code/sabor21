const textsaludo = document.getElementById('saludo');
const texthora = document.getElementById('hora');
const textfecha = document.getElementById('fecha');
const textfrase = document.getElementById('frase');


function actualizarHorario() {

    const fecha = new Date();

    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;

    const hora = fecha.getHours();
    const minutos = fecha.getMinutes();

    const hora12 = hora % 12 || 12;

    // Mostrar fecha
    textfecha.innerText = `${dia}/${mes}`;

    // Mostrar hora
    texthora.innerText = `${hora12}:${String(minutos).padStart(2, '0')}`;

    // Mostrar saludo y frase
    if (hora < 12) {
        textsaludo.innerText = "☀️ Buenos días";

    } else if (hora < 20) {
        textsaludo.innerText = "🌤️ Buenas tardes";

    } else {
        textsaludo.innerText = "🌙 Buenas noches";
    }
}



actualizarHorario();

setInterval(actualizarHorario, 60000);