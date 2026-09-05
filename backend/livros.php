<?php
require_once "conexao.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $titulo = $_POST["titulo"];
    $autor = $_POST["autor"];
    $editora = $_POST["editora"];
    $ano = $_POST["ano"];
    $erro = false;

    if (empty($titulo)) {
        echo "O título é obrigatório.";
        $erro = true;
    }

    if (empty($autor)) {
        echo "O autor é obrigatório.";
        $erro = true;
    }

    if (empty($editora)) {
        echo "A editora é obrigatória.";
        $erro = true;
    }

    if (empty($ano)) {
        echo "O ano é obrigatório.";
        $erro = true;
    }

    if (!$erro) {
        $sql = "INSERT INTO livros 
                (titulo, autor, editora, ano) 
                VALUES(:titulo, :autor, :editora, :ano)";
        try {
            $stmt = $conexao->prepare($sql);
            $stmt->bindValue(":titulo", $titulo);
            $stmt->bindValue(":autor", $autor);
            $stmt->bindValue(":editora", $editora);
            $stmt->bindValue(":ano", $ano);

            $stmt->execute();
            echo "Livro cadastrado com sucesso";
        } catch (PDOException $e) {
            echo "Erro ao cadastrar o livro: " . $e->getMessage();
        }
    }
}
