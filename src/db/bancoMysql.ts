import mysql, { Connection } from 'mysql2/promise';

class BancoMysql {
    // Propriedade
    private conexao: Promise<Connection>;

    // Métodos
    constructor() {
        this.conexao = mysql.createConnection({
            host: process.env.dbhost?process.env.dbhost:"riffly-estudante-973a.e.aivencloud.com",
            user:process.env.dbuser?process.env.dbuser:"avnadmin",
            password:process.env.dbpassword?process.env.dbpassword:"",
            database:process.env.dbname?process.env.dbname:"playmusic",
            port:process.env.dbport?parseInt(process.env.dbport):3306
        });
    }

    async getConnection() {
        const conn = await this.conexao; 
        return conn;
    }

    async end() {
        const conn = await this.conexao; 
        await conn.end();
    }

    async listarUsuario(){
        const conn = await this.getConnection()
        const [result, fields] = await conn.query("SELECT * FROM usuarios");
        return result 
    }

    async listarMusicas(){
        const conn = await this.getConnection()
        const [result, fields] = await conn.query("SELECT * FROM musicas");
        return result 
    }

    async inserirUsuario(usuarios:{id:number,nome_usuario:string,email_usuario:string,senha_usuario:string,foto_usuario:string}){
        const conn = await this.getConnection()
        const sqlQuery = "INSERT INTO usuarios (id,nome_usuario,email_usuario,senha_usuario,foto_usuario) VALUES (?,?,?,?,?)"
        const parametro = [usuarios.id,usuarios.nome_usuario,usuarios.email_usuario,usuarios.senha_usuario,usuarios.foto_usuario]
        const [result, fields] = await conn.query(sqlQuery,parametro);
        return result
    }

    async inserirMusica(musicas:{id:number,nome_musica:string,cantor_musica:string,genero_musica:string,letra_musica:string,capa_musica:string, lancamento_musica:string, ouvintes_musica:string }){
        const conn = await this.getConnection()
        const sqlQuery = "INSERT INTO produtos ( id, nome_musica,cantor_musica,genero_musica,letra_musica,capa_musica, lancamento_musica, ouvintes_musica) VALUES (?,?,?,?,?,?,?,?)"
        const parametro = [musicas.id,musicas.nome_musica, musicas.cantor_musica, musicas.genero_musica,musicas.letra_musica, musicas.capa_musica, musicas.lancamento_musica, musicas.ouvintes_musica]
        const [result, fields] = await conn.query(sqlQuery,parametro);
        return result
    }
    
    async excluirMusica(id:string){
        const conn = await this.getConnection()
        const [result, fields] = await conn.query("SELECT * from produtos");
        return result
    }
    async inserir(produto:{id:string,nome:string,descricao:string,preco:string,imagem:string}){
        const conn = await this.getConnection()
        const sqlQuery = "INSERT INTO produtos (id,nome,descricao,preco,imagem) VALUES (?,?,?,?,?)"
        const parametro = [produto.id,produto.nome,produto.descricao,produto.preco,produto.imagem]
        const [result, fields] = await conn.query(sqlQuery,parametro);
        return result
    }
    async excluir(id:string){
        const conn = await this.getConnection()
        const sqlQuery = "DELETE FROM produtos WHERE id = ?"
        const parametro = [id]
        const [result, fields] = await conn.query(sqlQuery,parametro);
        return result
    }
    async alterar(id:string,produto:{id?:string,nome:string,descricao:string,preco:string,imagem:string}){
        const conn = await this.getConnection()
        const sqlQuery = "UPDATE produtos SET nome=?,descricao=?,preco=?,imagem=? WHERE id = ?"
        const parametro = [produto.nome,produto.descricao,produto.preco,produto.imagem,id]
        const [result, fields] = await conn.query(sqlQuery,parametro);
        return result
    }
}

export default BancoMysql;