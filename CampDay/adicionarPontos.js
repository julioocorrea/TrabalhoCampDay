const fs = require("fs")

function adicionarpontos(nomeEquipe, pontos) {

    fs.readFile("./pontuacao.json", 'utf8', (erro, dados) => {

        if (!!dados) {
            console.log(dados)

            const json = JSON.parse(dados)

            const contador = false

            json.forEach(equipe => {
                if (equipe.nome === nomeEquipe) {
                    equipe.pontos += pontos
                    contador = true
                }
            })

            if (contador === false) {
                const objeto = {
                    nome: nomeEquipe,
                    pontos: pontos
                }
                fs.writeFileSync('pontuacao.json', JSON.stringify(objeto, null, 2), (erro) => {
                    if (erro) console.log("Erro ao salvar arquivo final")
                    else console.log("Arquivo final salvo com sucesso!")
                })
            }

            console.log(json)

            fs.writeFileSync('pontuacao.json', JSON.stringify(json, null, 2), (erro) => {
                if (erro) console.log("Erro ao salvar arquivo final")
                else console.log("Arquivo final salvo com sucesso!")
            })

        } else {
            const objeto = [{
                nome: nomeEquipe,
                pontos: pontos
            }]
            fs.writeFileSync('pontuacao.json', JSON.stringify(objeto, null, 2), (erro) => {
                if (erro) console.log("Erro ao salvar arquivo final")
                else console.log("Arquivo final salvo com sucesso!")
            })
        }
    })
}

adicionarpontos("soso", 40)

