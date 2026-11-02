const btnPedir = document.getElementById("btn-pedir");

if (btnPedir) {
    btnPedir.addEventListener("click", () => {
        if (!Array.isArray(carrito) || carrito.length === 0) {
            alert("Tu carrito está vacío. Agregá algún producto antes de terminar el pedido.");
            return;
        }

        const valor = (id) => document.getElementById(id)?.value?.trim() || "No especificado";
        let mensaje = `*NUEVO PEDIDO - SABOR 21*\n\n👤 Cliente: ${valor("nombre")}\n📍 Dirección: ${valor("direccion")}\n📱 Teléfono: ${valor("telefono")}\n\n🛒 *PEDIDO:*\n`;
        let suma = 0;

        carrito.forEach((producto) => {
            const subtotal = Number(producto.precio) * Number(producto.cantidad);
            mensaje += `\n🍔 ${producto.nombre} x${producto.cantidad}\nSubtotal: ${formatoPrecio(subtotal)}\n`;
            suma += subtotal;
        });

        mensaje += `\n💰 *TOTAL: ${formatoPrecio(suma)}*\n\n📝 Observación: ${valor("observacion")}`;
        const numero = "595974924226";
        window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`, "_blank", "noopener");
    });
}
