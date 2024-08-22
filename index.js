const express = require("express")
const fs = require("fs")
const app = express()

app.get('/', (req, res) => {
    const HTMLpagInicial = 
    `
      <!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="home.css">
    <title>Painel</title>
</head>
<style>
    body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow: hidden; /* Remove a barra de rolagem principal */
}

body {
    background-image: url('./background.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: flex;
    align-items: center; /* Centraliza verticalmente */
    justify-content: center; /* Centraliza horizontalmente */
}

.container-principal {
    width: 80%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    margin-top: 150px; /* Ajusta para descer a div principal */
}

.div-01 {
    width: 60%;
}

.colocado {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.numero {
    width: 70px;
    height: 50px;
    border-radius: 8px;
    text-align: center;
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    font-family: sans-serif;
    font-weight: bold;
    color: #651acf;
}

.escolastop5 {
    background-color: #ffffff;
    width: 550px;
    height: 60px;
    border-radius: 8px;
    display: flex;
    justify-content: space-between; /* Adiciona espaço entre os itens para fixá-los nas extremidades */
    align-items: center; /* Centraliza verticalmente */
    padding: 0 20px; /* Adiciona espaçamento interno */
}

.nome-escola {
    font-size: 30px;
    flex-shrink: 0; /* Garante que o nome da escola não encolha */
    font-family: sans-serif;
    font-weight: bold;
    color: #651acf;
}

.pontuacao {
    font-size: 40px;
    flex-shrink: 0; /* Garante que a pontuação não encolha */
    font-family: sans-serif;
    font-weight: 1000;
    color: #651acf;
}

.div-02 {
    width: 35%;
    background-color: #651acf;
    color: white;
    padding: 20px;
    
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
}

.lista-equipes {
    width: 100%;
    max-height: 300px;
    overflow-y: auto;
    position: relative;
}

/* Esconde a barra de rolagem */
.lista-equipes::-webkit-scrollbar {
    width: 0px;
}

.equipe {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 10px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

.numero-equipe, .pontuacao-equipe {
    flex-shrink: 0;
}

.nome-equipe {
    flex-grow: 1;
    text-align: center;
}

/* Adiciona uma sombra fixa na parte inferior da div-02 */
.div-02::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
    pointer-events: none;
}

</style>
<body>
    <div class="container-principal">
        <div class="div-01">
            <div class="colocado">
                <div class="numero" style="background-color: #ffbb00;">
                    1
                </div>
                <div class="escolastop5">
                    <div class="nome-escola">
                        Nome Escola 1
                    </div>
                    <div class="pontuacao">
                        100
                    </div>
                </div>
            </div>
            <div class="colocado">
                <div class="numero" style="background-color: #b3b1ab;">
                    2
                </div>
                <div class="escolastop5">
                    <div class="nome-escola">
                        Nome Escola 2
                    </div>
                    <div class="pontuacao">
                        90
                    </div>
                </div>
            </div>
            <div class="colocado">
                <div class="numero" style="background-color: #e27a00;">
                    3
                </div>
                <div class="escolastop5">
                    <div class="nome-escola">
                        Nome Escola 3
                    </div>
                    <div class="pontuacao">
                        80
                    </div>
                </div>
            </div>
            <div class="colocado">
                <div class="numero" style="background-color: #ededed;">
                    4
                </div>
                <div class="escolastop5">
                    <div class="nome-escola">
                        Nome Escola 5
                    </div>
                    <div class="pontuacao">
                        70
                    </div>
                </div>
            </div>
            <div class="colocado">
                <div class="numero" style="background-color: #ffffff;">
                    5
                </div>
                <div class="escolastop5">
                    <div class="nome-escola">
                        Nome Escola 6
                    </div>
                    <div class="pontuacao">
                        67  
                    </div>
                </div>
            </div>
        </div>
        <div class="div-02">
            <div class="lista-equipes">
                <div class="equipe">
                    <span class="numero-equipe">6</span>
                    <span class="nome-equipe">nome da escola</span>
                    <span class="pontuacao-equipe">70</span>
                </div>
                <div class="equipe">
                    <span class="numero-equipe">7</span>
                    <span class="nome-equipe">nome da escola</span>
                    <span class="pontuacao-equipe">70</span>
                </div>
                <div class="equipe">
                    <span class="numero-equipe">8</span>
                    <span class="nome-equipe">nome da escola</span>
                    <span class="pontuacao-equipe">70</span>
                </div>
                <div class="equipe">
                    <span class="numero-equipe">8</span>
                    <span class="nome-equipe">nome da escola</span>
                    <span class="pontuacao-equipe">70</span>
                </div>
                <div class="equipe">
                    <span class="numero-equipe">8</span>
                    <span class="nome-equipe">nome da escola</span>
                    <span class="pontuacao-equipe">70</span>
                </div>
                <div class="equipe">
                    <span class="numero-equipe">8</span>
                    <span class="nome-equipe">nome da escola</span>
                    <span class="pontuacao-equipe">70</span>
                </div>
                <div class="equipe">
                    <span class="numero-equipe">8</span>
                    <span class="nome-equipe">nome da escola</span>
                    <span class="pontuacao-equipe">70</span>
                </div>
                <div class="equipe">
                    <span class="numero-equipe">8</span>
                    <span class="nome-equipe">nome da escola</span>
                    <span class="pontuacao-equipe">70</span>
                </div>
                <div class="equipe">
                    <span class="numero-equipe">8</span>
                    <span class="nome-equipe">nome da escola</span>
                    <span class="pontuacao-equipe">70</span>
                </div>
                <div class="equipe">
                    <span class="numero-equipe">8</span>
                    <span class="nome-equipe">nome da escola</span>
                    <span class="pontuacao-equipe">70</span>
                </div>
                <!-- Mais equipes podem ser adicionadas aqui -->
            </div>
        </div>
        
        </div>
        
    </div>
</body>
</html>
    `
    res.send(HTMLpagInicial)
})

app.get('/formulario', (req, res) => {
    const htmlFormulario = 
    `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Cadastro de Pontuação</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f9;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
            }
            form {
                background: #ffffff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                max-width: 400px;
                width: 100%;
            }
            h1 {
                margin-top: 0;
                font-size: 24px;
                color: #333;
                text-align: center;
            }
            div {
                margin-bottom: 15px;
            }
            label {
                display: block;
                margin-bottom: 5px;
                font-weight: bold;
            }
            select, input[type='number'] {
                width: 100%;
                padding: 8px;
                border: 1px solid #ddd;
                border-radius: 4px;
                box-sizing: border-box;
            }
            button {
                background-color: #007bff;
                color: #fff;
                border: none;
                padding: 10px;
                border-radius: 4px;
                cursor: pointer;
                width: 100%;
                font-size: 16px;
            }
            button:hover {
                background-color: #0056b3;
            }
        </style>
    </head>
    <body>
        <form method='get' action='/enviar-formulario'>
            <h1>Cadastro de Pontuação</h1>
            <div>
                <label>Escola</label><br> 
                <select name='Escola'>
                    <option value='Escola1'>Escola 1</option>
                    <option value='Escola2'>Escola 2</option>
                    <option value='Escola3'>Escola 3</option>
                </select>
            </div>
            <div>
                <label>Pontuação</label><br>
                <input name='pontuacao' type='number' min='0' />
            </div>
            <div><button type='submit'>Enviar</button></div>
        </form>
    </body>
    </html>
    `
    res.send(htmlFormulario)
})

app.get('/enviar-formulario', (req, res) => {
    // query parameter
    const HTMLFormEnviado = 
    `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Confirmação</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f9;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
            }
            .container {
                background: #ffffff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                text-align: center;
                max-width: 400px;
                width: 100%;
            }
            h1 {
                margin-top: 0;
                font-size: 24px;
                color: #333;
            }
            p {
                font-size: 18px;
                color: #555;
                margin: 20px 0;
            }
            button {
                background-color: #007bff;
                color: #fff;
                border: none;
                padding: 10px;
                border-radius: 4px;
                cursor: pointer;
                font-size: 16px;
            }
            button:hover {
                background-color: #0056b3;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Formulário Enviado!</h1>
            <p>Sua mensagem foi enviada com sucesso.</p>
            <a href="/" style="text-decoration: none;">
                <button type="button">Voltar</button>
            </a>
        </div>
    </body>
    </html>
    `
    const Escola = req.query.Escola
    const pontuacao = parseInt(req.query.pontuacao) 
    adicionarPontos(Escola, pontuacao)
    res.send(HTMLFormEnviado)
})

app.listen(3000, () => {
    console.log("Servidor está escutando...")
})

function adicionarPontos(nomeEquipe, pontos) {

    fs.readFile("./pontuacao.json", 'utf8', (erro, dados) => {

        if (!!dados) {
            const json = JSON.parse(dados)

            let verificarSeExiste = false

            json.forEach(equipe => {
                if (equipe.nome === nomeEquipe) {
                    equipe.pontos += pontos
                    verificarSeExiste = true
                }
            })

            if (verificarSeExiste === false) {
                json.push({
                    nome: nomeEquipe,
                    pontos: pontos
                })
            }

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

