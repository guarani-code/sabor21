const categorias = [
    { id: "hamburguesas", img: "assets/icons/hamburguesas.svg", titulo: "Hamburguesas" },
    { id: "pizzas", img: "assets/icons/pizzas.svg", titulo: "Pizzas" },
    { id: "lomitos", img: "assets/icons/lomitos.svg", titulo: "Lomitos y sándwiches" },
    { id: "acompanamientos", img: "assets/icons/acompanamientos.svg", titulo: "Papas y acompañamientos" },
    { id: "pollo-picadas", img: "assets/icons/pollo-picadas.svg", titulo: "Pollo y picadas" },
    { id: "promociones", img: "assets/icons/promociones.svg", titulo: "Combos y promociones" },
    { id: "bebidas", img: "assets/icons/bebidas.svg", titulo: "Bebidas" },
    { id: "postres", img: "assets/icons/postres.svg", titulo: "Postres" }
];

const contenedorCategorias = document.getElementById("contenedor-categoria");
if (contenedorCategorias) {
    categorias.forEach((categoria) => {
        const item = document.createElement("a");
        item.className = "item-categoria";
        item.href = `hamburguesa.html?categoria=${encodeURIComponent(categoria.id)}`;
        item.innerHTML = '<img class="iconos-categoria"><p></p>';
        item.querySelector("img").src = categoria.img;
        item.querySelector("img").alt = categoria.titulo;
        item.querySelector("p").textContent = categoria.titulo;
        contenedorCategorias.appendChild(item);
    });
}
