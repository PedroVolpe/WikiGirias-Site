function realizarPesquisa() {
  // Obter o valor digitado na caixa de pesquisa
  const valorPesquisa = document.querySelector('.cabecalho_conteudo_barra_pesquisa input').value.toLowerCase();

  // Verificar se o texto digitado é "Foi de base"
  if (valorPesquisa.trim() === "foi de base") {
      // Redirecionar para a página de gíria
      window.location.href = "pagGiria.html";
  } else if (valorPesquisa.trim() === "zueira") {
    // Redirecionar para a página de gíria
    window.location.href = "pagGiria2.html";
  } else if (valorPesquisa.trim() === "papo reto") {
      // Redirecionar para a página de gíria
      window.location.href = "pagGiria3.html";
  } else if (valorPesquisa.trim() === "sacar" || valorPesquisa.trim() === "sacou" ) {
        // Redirecionar para a página de gíria
        window.location.href = "pagGiria4.html";
  } else if (valorPesquisa.trim() === "trampo") {
        // Redirecionar para a página de gíria
        window.location.href = "pagGiria5.html";
  } else if (valorPesquisa.trim() === "paia") {
        // Redirecionar para a página de gíria
        window.location.href = "pagGiria6.html";
  } else {
    // Redirecionar para a página de resultados de pesquisa
    window.location.href = "pagResultadoPesquisa.html";
}
}