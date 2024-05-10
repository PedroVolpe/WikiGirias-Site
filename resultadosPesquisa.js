// Função para ler o arquivo de gírias
function lerArquivoGirias() {
    // Utilize o objeto FileReader para ler o arquivo
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'resultados de pesquisa.txt', true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Separa as gírias e suas definições
        const girias = xhr.responseText.split('\n');
        exibirResultadosPesquisa(girias);
      }
    };
    xhr.send();
  }
  
  // Função para exibir os resultados da pesquisa
  function exibirResultadosPesquisa(girias) {
    const resultadosPesquisa = document.querySelector('.resultados-pesquisa');
    resultadosPesquisa.innerHTML = '';
  
    for (let i = 0; i < girias.length; i++) {
      const [titulo, definicao] = girias[i].split(';');
      const giriaElement = document.createElement('div');
      giriaElement.classList.add('giria');
  
      const tituloElement = document.createElement('h3');
      tituloElement.textContent = titulo;
  
      const definicaoElement = document.createElement('p');
      definicaoElement.textContent = definicao;
  
      giriaElement.appendChild(tituloElement);
      giriaElement.appendChild(definicaoElement);
      resultadosPesquisa.appendChild(giriaElement);
    }
  }
  
  // Chama a função para ler o arquivo de gírias
  lerArquivoGirias();