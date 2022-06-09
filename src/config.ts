/**
 * Parâmetros
 */
const port = 9000;
const base_url = `http://localhost:${port}/`;

export default Object.freeze({
  port: port,
  base_url: base_url,
  database: {
    sgbd: 'MongoDb',
    host: '127.0.0.1',
    port: '27017',
    user: 'admin',
    pass: '1234',
    base: 'nome_do_schema_ou_colecao'
  }
});
