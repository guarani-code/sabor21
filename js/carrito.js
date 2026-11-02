let carrito = [];

try {
    const guardado = JSON.parse(localStorage.getItem("carrito") || "[]");
    if (Array.isArray(guardado)) carrito = guardado;
} catch (error) {
    console.warn("El carrito guardado no era válido; se iniciará uno vacío.", error);
}

const contenedorLista = document.getElementById("lista-carrito");
const total = document.getElementById("total");
const contadorCarrito = document.querySelector(".contador-carrito");

function formatoPrecio(precio) {
    return Number(precio).toLocaleString("es-PY") + " Gs.";
}

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function actualizarContador() {
    if (!contadorCarrito) return;
    contadorCarrito.textContent = carrito.reduce((suma, item) => suma + Number(item.cantidad || 0), 0);
}

function mostrarCarrito() {
    if (!contenedorLista) {
        actualizarContador();
        return;
    }

    contenedorLista.replaceChildren();
    if (carrito.length === 0) {
        contenedorLista.innerHTML = '<div class="carrito-vacio"><h3>🛒 Tu carrito está vacío</h3><p>Agregá algo delicioso de nuestro menú 🍔</p></div>';
    } else {
        carrito.forEach((producto) => {
            const item = document.createElement("div");
            item.className = "item-carrito";
            item.innerHTML = `
                <h4></h4><p class="precio-producto"></p>
                <div class="cantidad"><button class="btn-menos" type="button">−</button><span></span><button class="btn-mas" type="button">+</button></div>
            `;
            item.querySelector("h4").textContent = producto.nombre;
            item.querySelector(".precio-producto").textContent = formatoPrecio(producto.precio);
            item.querySelector(".cantidad span").textContent = producto.cantidad;
            item.querySelector(".btn-mas").addEventListener("click", () => cambiarCantidad(producto.id, 1));
            item.querySelector(".btn-menos").addEventListener("click", () => cambiarCantidad(producto.id, -1));
            contenedorLista.appendChild(item);
        });
    }

    if (total) {
        const suma = carrito.reduce((acum, producto) => acum + Number(producto.precio) * Number(producto.cantidad), 0);
        total.textContent = `Total: ${formatoPrecio(suma)}`;
    }
    actualizarContador();
}

function cambiarCantidad(id, cambio) {
    const producto = carrito.find((item) => String(item.id) === String(id));
    if (!producto) return;
    producto.cantidad = Number(producto.cantidad) + cambio;
    if (producto.cantidad <= 0) carrito = carrito.filter((item) => String(item.id) !== String(id));
    guardarCarrito();
    mostrarCarrito();
}

function agregarAlCarrito(producto) {
    const productoExistente = carrito.find(
        (item) => String(item.id) === String(producto.id)
    );

    if (productoExistente) {
        productoExistente.cantidad = Number(productoExistente.cantidad || 0) + 1;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    guardarCarrito();
    mostrarCarrito();

    const aviso = document.getElementById("aviso-carrito");
    const mensaje = document.getElementById("aviso-mensaje");

    if (aviso && mensaje && window.bootstrap) {
        mensaje.textContent = `${producto.nombre} agregado al carrito`;
        bootstrap.Toast.getOrCreateInstance(aviso, { delay: 2500 }).show();
    }
}


const btnCarrito = document.getElementById("btn-carrito");
const carritoPanel = document.getElementById("carrito-panel");
const btnCerrar = document.getElementById("cerrar-carrito");
const overlay = document.getElementById("overlay");

if (btnCarrito && carritoPanel && overlay) {
    btnCarrito.addEventListener("click", (evento) => {
        evento.preventDefault();
        carritoPanel.classList.toggle("activo");
        overlay.classList.toggle("activo");
    });
}
if (btnCerrar && carritoPanel && overlay) {
    btnCerrar.addEventListener("click", () => {
        carritoPanel.classList.remove("activo");
        overlay.classList.remove("activo");
    });
}
if (overlay && carritoPanel) {
    overlay.addEventListener("click", () => {
        carritoPanel.classList.remove("activo");
        overlay.classList.remove("activo");
    });
}

mostrarCarrito();
