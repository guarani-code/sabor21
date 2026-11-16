const btnEnviarmensaje = document.getElementById('formulario-contacto');

btnEnviarmensaje.addEventListener("submit", function(event){
    event.preventDefault();
    
    const nombre_apellido = document.getElementById('nombre_apellido').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;

    const texto = `🍔 *SABOR 21*
━━━━━━━━━━━━━━━━━━

    ¡Hola! Quisiera realizar una consulta.

👤 *DATOS DEL CLIENTE* 👤

Nombre: ${nombre_apellido}
Teléfono: ${telefono}

*ASUNTO*
${asunto}

*MENSAJE*
${mensaje}

━━━━━━━━━━━━━━━━━━
¡Muchas gracias!`;

    const numeroWhat = "595974924226";

    const url = `https://wa.me/${numeroWhat}?text=${encodeURIComponent(texto)}`;

    window.open(url,"_blank");

    

});