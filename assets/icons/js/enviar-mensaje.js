const btnEnviarmensaje = document.getElementById('formulario-contacto');

btnEnviarmensaje.addEventListener("submit", function(event){
    event.preventDefault();
    
    const nombre_apellido = document.getElementById('nombre_apellido').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;

    const texto = `Hola quiero realizar una consulta.

    Nombre: ${nombre_apellido}
    Teléfono: ${telefono}
    Asunto: ${asunto}
    Mensaje: ${mensaje}`;

    const numeroWhat = "595974924226";

    const url = `https://wa.me/${numeroWhat}?text=${encodeURIComponent(texto)}`;

    window.open(url,"_blank");

    

});