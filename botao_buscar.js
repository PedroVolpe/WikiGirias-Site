function realizarPesquisa() {
  // Obter o valor digitado na caixa de pesquisa
  const valorPesquisa = document.querySelector('.cabecalho_conteudo_barra_pesquisa input').value.toLowerCase();

  // Verificar se o texto digitado é "Foi de base"
  if (valorPesquisa.trim() === "foi de base") {
      // Redirecionar para a página de gíria
      window.location.href = "pagGiria.html";
  } else {
      // Redirecionar para a página de resultados de pesquisa
      window.location.href = "pagResultadoPesquisa.html";
  }
}