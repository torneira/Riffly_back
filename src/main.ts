
// 1 - Para construir um servidor back-end e responder
// Vamos utilizar o EXPRESS
import express from 'express'
import cors from 'cors'
import mysql from 'mysql2/promise'
//Criar um objeto do tipo express.
const app = express()
//incluir pra ele receber json
app.use(express.json())  //Middleware
//incluir o CORS -> QUANDO A GENTE TEM OUTRA PORTA FAZENDO REQUISIÇÃO PARA A PORTA DO SERVIDOR
app.use(cors())
//ROTAS
app.get("/produtos",async(req,res)=>{

    try{
        const conexao = await mysql.createConnection({
            host: process.env.dbhost,
            user:process.env.dbuser,
            password:process.env.dbpassword,
            database:process.env.dbname,
            port:process.env.dbport?parseInt(process.env.dbport):3306
        })
        //PASSO 3: QUERY  -> SELECT * FROM produtos
        const [result,fields]  = await conexao.query("SELECT * FROM produtos")
        await conexao.end()
        //PASSO 4: Colocar os dados do banco no response
        res.send(result)
    }catch(e){
        res.status(500).send("Erro do servidor")
    }  
})

app.post("/produtos",async(req,res)=>{
    try{
        const conexao = await mysql.createConnection({
            host: process.env.dbhost,
            user:process.env.dbuser,
            password:process.env.dbpassword,
            database:process.env.dbname,
            port:process.env.dbport?parseInt(process.env.dbport):3306
        })
        const {id,nome,descricao,preco,imagem} = req.body
        const [result,fields]  = 
            await conexao.query("INSERT INTO produtos VALUES (?,?,?,?,?)",
                [id,nome,descricao,preco,imagem])
        await conexao.end()
        res.status(200).send(result)
    }catch(e){
        console.log(e)
        res.status(500).send("Erro do servidor")
    }  
})


app.get("/usuarios",async(req,res)=>{


    try{
        const conexao = await mysql.createConnection({
            host: process.env.dbhost,
            user:process.env.dbuser,
            password:process.env.dbpassword,
            database:process.env.dbname,
            port:process.env.dbport?parseInt(process.env.dbport):3306
        })
        const [result,fields]  = await conexao.query("SELECT * FROM usuarios")
        await conexao.end()
        res.send(result)
    }catch(e){
        res.status(500).send("Erro do servidor")
    }  
})

app.post("/usuarios",async(req,res)=>{
    try{
        const conexao = await mysql.createConnection({
            host: process.env.dbhost,
            user:process.env.dbuser,
            password:process.env.dbpassword,
            database:process.env.dbname,
            port:process.env.dbport?parseInt(process.env.dbport):3306
        })
        const {id, nome_usuario, email_usuario, senha_usuario, foto_usuario} = req.body
        const [result,fields]  = 
            await conexao.query("INSERT INTO usuarios VALUES (?,?,?,?,?)",
                [id, nome_usuario, email_usuario, senha_usuario, foto_usuario])
        await conexao.end()
        res.status(200).send(result)
    }catch(e){
        console.log(e)
        res.status(500).send("Erro do servidor")
    }  
})

app.get("/album",async(req,res)=>{


    try{
        const conexao = await mysql.createConnection({
            host: process.env.dbhost,
            user:process.env.dbuser,
            password:process.env.dbpassword,
            database:process.env.dbname,
            port:process.env.dbport?parseInt(process.env.dbport):3306
        })
        
        const [result,fields]  = await conexao.query("SELECT * FROM album")
        await conexao.end()
        res.send(result)
    }catch(e){
        res.status(500).send("Erro do servidor")
    }  
})

app.post("/album",async(req,res)=>{
    try{
        const conexao = await mysql.createConnection({
            host: process.env.dbhost,
            user:process.env.dbuser,
            password:process.env.dbpassword,
            database:process.env.dbname,
            port:process.env.dbport?parseInt(process.env.dbport):3306
        })
        const {id, nome_album, cantor_musica, quant_musicas_album, lancamento_album, capa_album, ouvintes_album} = req.body
        const [result,fields]  = 
            await conexao.query("INSERT INTO album VALUES (?,?,?,?,?,?,?)",
                [id, nome_album, cantor_musica, quant_musicas_album, lancamento_album, capa_album, ouvintes_album])
        await conexao.end() 
        res.status(200).send(result)
    }catch(e){
        console.log(e)
        res.status(500).send("Erro do servidor")
    }  
})

// Rota para obter todos os comentários
app.get('/comentarios', async(req,res)=>{

    try{
        const conexao = await mysql.createConnection({
            host: process.env.dbhost,
            user:process.env.dbuser,
            password:process.env.dbpassword,
            database:process.env.dbname,
            port:process.env.dbport?parseInt(process.env.dbport):3306
        })
        //PASSO 3: QUERY  -> SELECT * FROM produtos
        const [result,fields]  = await conexao.query("SELECT * FROM comentarios")
        await conexao.end()
        //PASSO 4: Colocar os dados do banco no response
        res.send(result)
    }catch(e){
        res.status(500).send("Erro do servidor")
    }  
})
// Rota para adicionar um comentário
app.post('/comentarios', async(req,res)=>{
    try{
        const conexao = await mysql.createConnection({
            host: process.env.dbhost,
            user:process.env.dbuser,
            password:process.env.dbpassword,
            database:process.env.dbname,
            port:process.env.dbport?parseInt(process.env.dbport):3306
        })
        const {nome_usuario,comentarios} = req.body
        const [result,fields]  = 
            await conexao.query("INSERT INTO comentarios VALUES (?,?)",
                [nome_usuario,comentarios])
        await conexao.end()
        res.status(200).send(result)
    }catch(e){
        console.log(e)
        res.status(500).send("Erro do servidor")
    }  
})

