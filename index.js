const express = require("express");
const { Sequelize, DataTypes } = require('sequelize');
const path = require("path");
const fs = require('fs'); // Importa o módulo fs para manipulação de arquivos

// Inicializa o aplicativo Express
const app = express();

// Conexão com o banco de dados SQLite
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'database.sqlite') // Nome do arquivo do banco de dados
});

// Importa o modelo Escola
const Escola = require('./models/escola')(sequelize, DataTypes);

// Middleware para interpretar dados do formulário
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Define o diretório de views
app.set('views', path.join(__dirname, 'views'));

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para registrar logs de requisições
app.use((req, res, next) => {
    const logMessage = `${new Date().toISOString()} - ${req.method} ${req.originalUrl}\n`;
    fs.appendFile('request_logs.txt', logMessage, (err) => {
        if (err) {
            console.error('Erro ao escrever no arquivo de log:', err);
        }
    });
    next(); // Chama o próximo middleware ou rota
});

// Rota para exibir a classificação
app.get('/', async (req, res) => {
    try {
        const escolas = await Escola.findAll({
            order: [['pontos', 'DESC']],
        });

        const melhoresEscolas = escolas.slice(0, 5);
        const outrasEscolas = escolas.slice(5);

        res.render('template', {
            title: 'Painel de Classificação', // Passando o título aqui também
            escolas: melhoresEscolas,
            equipes: outrasEscolas
        });
    } catch (error) {
        console.error("Erro ao buscar as escolas:", error);
        return res.status(500).send("Erro ao buscar as pontuações.");
    }
});

// Rota para exibir o formulário de adição de pontos
app.get('/adicionar-pontos', (req, res) => {
    res.render('formPont', { title: 'Adicionar Pontos' }); // Passando a variável title
});

// Rota para processar o formulário de adição de pontos
app.post('/adicionar-pontos', async (req, res) => {
    const { nome, pontos } = req.body;
    const pontosInt = parseInt(pontos, 10);

    try {
        if (pontosInt < 0 || pontosInt > 100) {
            return res.status(400).send('Os pontos devem estar entre 0 e 100.');
        }

        const escola = await Escola.findOne({ where: { nome } });

        if (escola) {
            // Se a escola já existe, atualiza os pontos
            escola.pontos += pontosInt;
            await escola.save();
            res.send('Pontos adicionados com sucesso à escola existente!');
        } else {
            // Se não existe, cria uma nova entrada
            await Escola.create({ nome, pontos: pontosInt });
            res.send('Escola cadastrada com sucesso com os pontos iniciais!');
        }
    } catch (error) {
        console.error("Erro ao adicionar pontos:", error);
        return res.status(500).send('Erro ao adicionar pontos.');
    }
});

// Sincronizar o modelo com o banco de dados e iniciar o servidor
sequelize.sync().then(() => {
    console.log("Tabela 'Escola' criada ou já existe.");
    app.listen(4000, () => {
        console.log("Servidor está escutando na porta 4000...");
    });
}).catch(error => console.error("Erro ao sincronizar:", error));
