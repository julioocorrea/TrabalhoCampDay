const fs = require('fs');

function gerarClassificacao() {
    fs.readFile('pontuacao.json', 'utf8', (e, data) => {
       
        try {
            const equipes = JSON.parse(data);

            console.log(equipes)

            const classificacao = equipes.sort((a, b) => a.pontuacao - b.pontuacao);

            console.log(classificacao);
        } catch (e) {
            console.error(e);
        }
    });
}

gerarClassificacao();
