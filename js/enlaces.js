function irFormulario() {

    if (!Array.isArray(carrito) || carrito.length === 0) {
        alert("🍔 ¡Tu carrito está vacío! Agregá productos antes de continuar.");
        return;
    }

    window.location.href = "formulario.html";
}