// Busca os livros cadastrados no backend (backend/livros.php) via GET
// e preenche a tabela #tabelaLivros com o JSON retornado.

document.addEventListener("DOMContentLoaded", function () {
  const corpoTabela = document.querySelector("#tabelaLivros tbody");
  const estado = document.getElementById("estadoLista");

  fetch("backend/livros.php")
    .then(function (resposta) {
      return resposta.json();
    })
    .then(function (livros) {
      corpoTabela.innerHTML = "";

      if (!livros || livros.length === 0) {
        estado.textContent = "Nenhum livro cadastrado ainda.";
        return;
      }

      livros.forEach(function (livro) {
        const linha = document.createElement("tr");
        linha.innerHTML =
          "<td>" + livro.id + "</td>" +
          "<td>" + livro.titulo + "</td>" +
          "<td>" + livro.autor + "</td>" +
          "<td>" + livro.editora + "</td>" +
          "<td>" + livro.ano + "</td>";
        corpoTabela.appendChild(linha);
      });

      estado.textContent = "";
    })
    .catch(function () {
      estado.textContent = "Não foi possível carregar os livros. Verifique se o backend está rodando.";
    });
});
