
<?php

require_once 'conexion.php';

try {

    $consulta = $conexion->query(
        "SELECT pro_id, pro_nombre, pro_precio
         FROM productos
         ORDER BY pro_id"
    );

    $productos = $consulta->fetchAll();

    echo "<h1>Conexión exitosa con Supabase</h1>";

    foreach ($productos as $producto) {
        echo "<p>";
        echo htmlspecialchars($producto['pro_nombre']);
        echo " - ";
        echo number_format($producto['pro_precio'], 0, ',', '.');
        echo " Gs.</p>";
    }

} catch (PDOException $e) {
    error_log($e->getMessage());
    echo "Error al consultar los productos.";
}
