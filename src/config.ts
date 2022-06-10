/**
 * Parâmetros
 */
const port = 9000; //  <---- Porta HTTP
const base_url = `http://localhost:${port}/`; //  <---- URL BASE

export default Object.freeze({
  port: port,
  base_url: base_url,
  database: {
    sgbd: 'MongoDb', //  <---- Sistema Gerenciador de Banco de Dados (MongoDb, MySQL, MsSql)
    host: '127.0.0.1', //  <---- Host do banco de dados
    port: 27017, //  <---- Porta do banco de dados
    user: 'root', //  <---- Usuário do banco de dados
    pass: 'example', //  <---- Senha do usuário no banco de dados
    base: 'admin' //  <---- Nome do Schema ou Database
  }
});
