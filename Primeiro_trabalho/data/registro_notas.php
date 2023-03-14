<?php
// Conectar com o banco de dados
$conn = mysqli_connect("localhost", "usuario", "senha", "banco_de_dados");

// Verificar se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Pegar os valores enviados pelo formulário
  $nome = $_POST["nome"];
  $materia = $_POST["materia"];
  $nota = $_POST["nota"];

  // Inserir os valores no banco de dados
  $sql = "INSERT INTO notas (nome, materia, nota) VALUES ('$nome', '$materia', $nota)";
  mysqli_query($conn, $sql);
}
?>
