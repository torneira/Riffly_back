"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 1 - Para construir um servidor back-end e responder
// Vamos utilizar o EXPRESS
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const promise_1 = __importDefault(require("mysql2/promise"));
//Criar um objeto do tipo express.
const app = (0, express_1.default)();
//incluir pra ele receber json
app.use(express_1.default.json()); //Middleware
//incluir o CORS -> QUANDO A GENTE TEM OUTRA PORTA FAZENDO REQUISIÇÃO PARA A PORTA DO SERVIDOR
app.use((0, cors_1.default)());
//ROTAS
app.get("/usuarios", async (req, res) => {
    try {
        const conexao = await promise_1.default.createConnection({
            host: process.env.dbhost,
            user: process.env.dbuser,
            password: process.env.dbpassword,
            database: process.env.dbname,
            port: process.env.dbport ? parseInt(process.env.dbport) : 3306
        });
        const [result, fields] = await conexao.query("SELECT * FROM usuarios");
        await conexao.end();
        res.send(result);
    }
    catch (e) {
        res.status(500).send("Erro do servidor");
    }
});
app.post("/usuarios", async (req, res) => {
    try {
        const conexao = await promise_1.default.createConnection({
            host: process.env.dbhost,
            user: process.env.dbuser,
            password: process.env.dbpassword,
            database: process.env.dbname,
            port: process.env.dbport ? parseInt(process.env.dbport) : 3306
        });
        const { id, nome_usuario, email_usuario, senha_usuario, foto_usuario } = req.body;
        const [result, fields] = await conexao.query("INSERT INTO usuarios VALUES (?,?,?,?,?)", [id, nome_usuario, email_usuario, senha_usuario, foto_usuario]);
        await conexao.end();
        res.status(200).send(result);
    }
    catch (e) {
        console.log(e);
        res.status(500).send("Erro do servidor");
    }
});


app.get("/album", async (req, res) => {
    try {
        const conexao = await promise_1.default.createConnection({
            host: process.env.dbhost,
            user: process.env.dbuser,
            password: process.env.dbpassword,
            database: process.env.dbname,
            port: process.env.dbport ? parseInt(process.env.dbport) : 3306
        });
        const [result, fields] = await conexao.query("SELECT * FROM album");
        await conexao.end();
        res.send(result);
    }
    catch (e) {
        res.status(500).send("Erro do servidor");
    }
});
app.post("/album", async (req, res) => {
    try {
        const conexao = await promise_1.default.createConnection({
            host: process.env.dbhost,
            user: process.env.dbuser,
            password: process.env.dbpassword,
            database: process.env.dbname,
            port: process.env.dbport ? parseInt(process.env.dbport) : 3306
        });
        const { id, nome_album, cantor_musica, quant_musicas_album, lancamento_album, capa_album, ouvintes_album } = req.body;
        const [result, fields] = await conexao.query("INSERT INTO album VALUES (?,?,?,?,?,?,?)", [id, nome_album, cantor_musica, quant_musicas_album, lancamento_album, capa_album, ouvintes_album]);
        await conexao.end();
        res.status(200).send(result);
    }
    catch (e) {
        console.log(e);
        res.status(500).send("Erro do servidor");
    }
});
//INICIAR O SERVIDOR
app.listen(8000, () => {
    console.log("SERVIDOR INICIADO NA PORTA 8000");
});
