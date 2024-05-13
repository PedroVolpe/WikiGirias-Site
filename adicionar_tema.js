// Ler o arquivo de temas
function lerTemas() {
    fetch('temas.txt')
        .then(response => response.text())
        .then(data => {
            const temas = data.trim().split('\n');
            exibirTemas(temas);
        })
        .catch(error => console.error('Erro ao ler o arquivo de temas:', error));
}

// Exibir os temas no menu suspenso
function exibirTemas(temas) {
    const dropdownContent = document.getElementById('dropdown-temas');
    temas.forEach(tema => {
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = tema;
        link.addEventListener('click', () => {
            adicionarTemaNaPesquisa(tema);
            toggleDropdown();
        });
        dropdownContent.appendChild(link);
    });
}

// Adicionar o tema selecionado na caixa de pesquisa
function adicionarTemaNaPesquisa(tema) {
    const caixaPesquisa = document.getElementById('caixa-pesquisa');
    caixaPesquisa.value = `${caixaPesquisa.value} ${tema}`;
}

// Alternar a exibição do menu suspenso
function toggleDropdown() {
    const dropdownContent = document.getElementById('dropdown-temas');
    if (dropdownContent.style.display === 'none') {
        dropdownContent.style.display = 'flex';
    } else {
        dropdownContent.style.display = 'none';
    }
}

// Chamar a função para ler os temas quando a página carregar
window.onload = lerTemas;