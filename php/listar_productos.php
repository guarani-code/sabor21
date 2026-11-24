
<?php

require_once "conexion.php";

header("Content-Type: application/json; charset=utf-8");

// Categorías permitidas
$categorias = [
    "hamburguesas" => "Hamburguesas",
    "pizzas" => "Pizzas",
    "lomitos" => "Lomitos",
    "acompanamientos" => "Papas fritas",
    "bebidas" => "Bebidas",
    "postres" => "Postres"
];

// Recibimos la categoría
$categoria = $_GET['categoria'] ?? '';

if (!isset($categorias[$categoria])) {

    http_response_code(400);

    echo json_encode([
        "error" => "Categoría no válida"
    ]);

    exit;
}

try {

    $sql = "SELECT
                p.pro_id AS id,
                p.pro_nombre AS nombre,
                p.pro_descripcion AS ingredientes,
                p.pro_precio AS precio,
                p.pro_img AS img,
                c.cat_nombre AS categoria
            FROM productos AS p
            INNER JOIN categorias AS c
            ON p.cat_id = c.cat_id
            WHERE c.cat_nombre = :categoria
            AND p.estado = TRUE";

    $stmt = $conexion->prepare($sql);

    $stmt->execute([
        ':categoria' => $categorias[$categoria]
    ]);

    $productos = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode(
        $productos,
        JSON_UNESCAPED_UNICODE
    );

} catch (PDOException $e) {

    error_log($e->getMessage());

    http_response_code(500);

    echo json_encode([
        "error" => "No se pudieron cargar los productos"
    ]);

}

?>
