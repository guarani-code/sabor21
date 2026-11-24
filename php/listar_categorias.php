<?php
    require_once "conexion.php";

    $sql = "SELECT * FROM categorias";

    $stmt = $conexion->prepare($sql);

    $stmt->execute();

    $categorias = $stmt->fetchAll(PDO::FETCH_ASSOC);

    foreach($categorias as $categoria){
        echo "categoria[cat_id]" . " - ";
        echo "categoria[cat_nombre]" . "<br>";
    }
?>