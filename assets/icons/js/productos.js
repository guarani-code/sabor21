const nombresCategorias = {
    hamburguesas: "Hamburguesas",
    pizzas: "Pizzas",
    lomitos: "Lomitos y sándwiches",
    acompanamientos: "Papas y acompañamientos",
    "pollo-picadas": "Pollo y picadas",
    promociones: "Combos y promociones",
    bebidas: "Bebidas",
    postres: "Postres"
};

function formatoPrecio(precio) {
    return Number(precio).toLocaleString("es-PY") + " Gs.";
}

async function cargarProductos() {
    const contenedor = document.getElementById("productos");
    if (!contenedor) return;

    const parametros = new URLSearchParams(window.location.search);
    const categoria = parametros.get("categoria") || "hamburguesas";
    const nombreCategoria = nombresCategorias[categoria];
    if (!nombreCategoria) {
        contenedor.textContent = "La categoría solicitada no existe.";
        return;
    }

    const titulo = document.querySelector("main .titulo");
    if (titulo) titulo.textContent = nombreCategoria;

    try {
        const respuesta = await fetch(`json/${categoria}.json`);
        if (!respuesta.ok) throw new Error(`Error HTTP ${respuesta.status}`);
        const productos = await respuesta.json();
        if (!Array.isArray(productos)) throw new Error("El JSON debe contener una lista de productos.");

        contenedor.replaceChildren();
        if (productos.length === 0) {
            contenedor.textContent = "Próximamente agregaremos productos a esta categoría.";
            return;
        }

        productos.forEach((producto) => {
            const tarjeta = document.createElement("div");
            tarjeta.className = "item-productos producto";
            tarjeta.innerHTML = `
                <h3></h3>
                <img class="imagen-producto" alt="">
                <p class="ingredientes"></p>
                <p class="precio"></p>
                <button class="btn-agregar" type="button">Agregar al carrito</button>
            `;
            tarjeta.querySelector("h3").textContent = producto.nombre;
            const imagen = tarjeta.querySelector(".imagen-producto");
            imagen.src = producto.img;
            imagen.alt = producto.nombre;
            tarjeta.querySelector(".ingredientes").textContent = producto.ingredientes || "";
            tarjeta.querySelector(".precio").textContent = formatoPrecio(producto.precio);
            tarjeta.querySelector(".btn-agregar").addEventListener("click", () => agregarAlCarrito(producto));
            contenedor.appendChild(tarjeta);
        });
    } catch (error) {
        console.error("No se pudieron cargar los productos:", error);
        contenedor.textContent = "No se pudieron cargar los productos. Revisá los archivos de la categoría.";
    }
}

cargarProductos();
