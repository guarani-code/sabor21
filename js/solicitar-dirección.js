document.getElementById("btn-ubicacion").addEventListener("click", () => {
    const estado = document.getElementById("estado-ubicacion");

    if (!navigator.geolocation) {
        estado.textContent = "Tu navegador no permite compartir la ubicación.";
        return;
    }

    estado.textContent = "Obteniendo ubicación…";

    navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
            const enlace = `https://www.google.com/maps?q=${coords.latitude},${coords.longitude}`;
            document.getElementById("direccion").value = enlace;
            estado.textContent = "Ubicación lista para enviar.";
        },
        () => {
            estado.textContent = "No se pudo obtener. Revisá el permiso de ubicación.";
        }
    );
});