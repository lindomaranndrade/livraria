<?php
$servidor = "localhost";
$banco = "livraria";
$usuario = "root";
$senha = "";


$dsn = "mysql:host=$servidor;dbname=$banco";

try {
    $conexao = new PDO($dsn, $usuario, $senha);
    $conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Erro na conexão com o banco de dados: " . $e->getMessage();
}
