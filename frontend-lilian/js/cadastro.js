// Envia o formulário de cadastro para o backend (backend/livros.php) via POST
// e trata a resposta em texto simples devolvida pelo PHP.

document.getElementById("formCadastro").addEventListener("submit", function (evento) {
  evento.preventDefault();

  const form = evento.target;
  const botao = document.getElementById("btnCadastrarLivro");
  const mensagem = document.getElementById("mensagem");

  const dadosForm = new FormData(form);

  mensagem.className = "";
  mensagem.textContent = "";
  botao.disabled = true;

  fetch("backend/livros.php", {
    method: "POST",
    body: dadosForm
  })
    .then(function (resposta) {
      return resposta.text();
    })
    .then(function (texto) {
      const cadastrouComSucesso = texto.indexOf("sucesso") !== -1;

      mensagem.textContent = texto;
      mensagem.className = cadastrouComSucesso ? "sucesso" : "erro";

      if (cadastrouComSucesso) {
        form.reset();
        setTimeout(function () {
          window.location.href = "lista.html";
        }, 900);
      } else {
        botao.disabled = false;
      }
    })
    .catch(function () {
      mensagem.textContent = "Não foi possível conectar ao servidor. Verifique se o backend está rodando.";
      mensagem.className = "erro";
      botao.disabled = false;
    });
});
