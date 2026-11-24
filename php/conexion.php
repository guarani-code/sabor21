<?php 

    $host = "localhost";
    $dbname = "sabor21_db";
    $user= "root";
    $password = "";

    try{

    
    $conexion = new PDO(
        "mysql:host=$host;dbname=$dbname;charset=utf8mb4",
        $user,
        $password

    );

    $conexion->setAttribute(
    PDO::ATTR_ERRMODE,
    PDO::ERRMODE_EXCEPTION
);

    } catch(PDOException $e){

    error_log($e->getMessage());
        die("error al conectar la base de datos");

    }



?>