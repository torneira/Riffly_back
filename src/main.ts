// LIVE SERVER é do FRONT-END
// QUEM É O LIVE SERVER DO BACK-END?

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

import BancoMysql from './db/bancoMysql'

//MUSICAS
app.get("/musicas",async(req,res)=>{
    try{
        const banco = new BancoMysql();
        const result = await banco.listarMusicas()
        console.log(result)
        await banco.end()
        res.send(result)
    }catch(e){
        console.log(e)
        res.status(500).send("Erro do servidor")
    }  
})


app.get("/musicas/:id",async(req,res)=>{
    try{
        const banco = new BancoMysql();
        const result = await banco.listarMusicasId(req.params.id)
        console.log(result)
        await banco.end()
        res.send(result)
    }catch(e){
        console.log(e)
        res.status(500).send("Erro do servidor")
    }  
})

app.get("/usuarios",async(req,res)=>{
    try{
        const banco = new BancoMysql();
        const result = await banco.listarUsuario()
        console.log(result)
        await banco.end()
        res.send(result)
    }catch(e){
        console.log(e)
        res.status(500).send("Erro do servidor")
    }  
})



//ALBUM
app.get("/album",async(req,res)=>{
    try{
        const banco = new BancoMysql();
        const result = await banco.listarAlbum()
        console.log(result)
        await banco.end()
        res.send(result)
    }catch(e){
        console.log(e)
        res.status(500).send("Erro do servidor")
    }  
})

app.get("/comentarios",async(req,res)=>{
    try{
        const banco = new BancoMysql();
        const result = await banco.listarComentarios()
        console.log(result)
        await banco.end()
        res.send(result)
    }catch(e){
        console.log(e)
        res.status(500).send("Erro do servidor")
    }  
})




app.post("/musicas",async(req,res)=>{
    try{
        const {id,nome_musica,cantor_musica,genero_musica,letra_musica, capa_musica,lancamento_musica, ouvintes_musica} = req.body
        
        const banco = new BancoMysql();
        
        const musicas = {id:parseInt(id), nome_musica,cantor_musica,genero_musica,letra_musica, capa_musica,lancamento_musica, ouvintes_musica}
        
        const result = await banco.inserirMusica(musicas)
        console.log(result)
        
        await banco.end()
        
        res.status(200).send(result)
    }catch(e){
        console.log(e)
        res.status(500).send("Erro do servidor")
    }  
})

app.post("/usuarios",async(req,res)=>{
    try{
        const {id,nome_usuario,email_usuario,senha_usuario,foto_usuario} = req.body
        
        const banco = new BancoMysql();
        
        const usuarios = {id:parseInt(id),nome_usuario,email_usuario,senha_usuario,foto_usuario}
        
        const result = await banco.inserirUsuario(usuarios)
        console.log(result)
        
        await banco.end()
        
        res.status(200).send(result)
    }catch(e){
        console.log(e)
        res.status(500).send("Erro do servidor")
    }  
})

app.post("/album",async(req,res)=>{
    try{
        const {id ,nome_album , cantor_album , quant_musicas_album ,lancamento_album ,capa_album ,ouvintes_album} = req.body
        
        const banco = new BancoMysql();
        
        const album = {id:parseInt(id),nome_album , cantor_album , quant_musicas_album ,lancamento_album ,capa_album ,ouvintes_album}
        
        const result = await banco.inserirAlbum(album)
        console.log(result)
        
        await banco.end()
        
        res.status(200).send(result)
    }catch(e){
        console.log(e)
        res.status(500).send("Erro do servidor")
    }  
})

app.post("/cometarios",async(req,res)=>{
    try{
        const {id, nome_usuario, comentarios } = req.body
        
        const banco = new BancoMysql();
        
        const comentario = {id:parseInt(id),nome_usuario, comentarios}
        
        const result = await banco.inserirComentario(comentario)
        console.log(result)
        
        await banco.end()
        
        res.status(200).send(result)
    }catch(e){
        console.log(e)
        res.status(500).send("Erro do servidor")
    }  
})




app.delete("/usuarios/:id",async(req, res)=>{
   console.log("Testando excluir o produto de id:"+ req.params.id)
   try{
    const sqlQuery = "DELETE FROM usuarios WHERE id=?"
    const parametro = [req.params.id]
    const banco = new BancoMysql();
    const result = await banco.excluirUsuario(req.params.id)
    res.status(200).send(result)
}catch(e){
    console.log(e)
    res.status(500).send("Erro do servidor")
}  
})

app.delete("/musicas/:id",async(req, res)=>{
    console.log("Testando excluir o produto de id:"+ req.params.id)
    try{
     const sqlQuery = "DELETE FROM musicas WHERE id=?"
     const parametro = [req.params.id]
     const banco = new BancoMysql();
     const result = await banco.excluirMusicas(req.params.id)
     res.status(200).send(result)
 }catch(e){
     console.log(e)
     res.status(500).send("Erro do servidor")
 }  
 })



app.put("/musicas/:id",async(req,res)=>{
    console.log("Testando alterar a musica de id:", req.params.id)
    try{
        const {nome_musica,cantor_musica,genero_musica,letra_musica, capa_musica,lancamento_musica, ouvintes_musica} = req.body
        //const sqlQuery = "UPDATE produtos set nome=?, descricao=?, preco=?, imagem=? WHERE id=?"
        const musicas = {nome_musica,cantor_musica,genero_musica,letra_musica, capa_musica,lancamento_musica, ouvintes_musica}
        const banco = new BancoMysql();

        const result = await banco.alterarMusicas(req.params.id,musicas)

        res.status(200).send(result)
    }catch(e){
        console.log(e)
        res.status(500).send("Erro do servidor")
    }  
    })

    app.put("/usuarios/:id",async(req,res)=>{
        console.log("Testando alterar o produto de id:", req.params.id)
        try{
            const {id,nome_usuario,email_usuario,senha_usuario,foto_usuario} = req.body
            //const sqlQuery = "UPDATE produtos set nome=?, descricao=?, preco=?, imagem=? WHERE id=?"
            const usuarios = {id,nome_usuario,email_usuario,senha_usuario,foto_usuario}
            const banco = new BancoMysql();
    
            const result = await banco.alterarUsuarios(req.params.id, usuarios)
    
            res.status(200).send(result)
        }catch(e){
            console.log(e)
            res.status(500).send("Erro do servidor")
        }  
        })
    


//INICIAR O SERVIDOR
app.listen(8000,()=>{
    console.log("SERVIDOR INICIADO NA PORTA 8000")
})
