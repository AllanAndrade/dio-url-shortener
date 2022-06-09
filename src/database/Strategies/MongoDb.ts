import DatabaseStrategy from '../DatabaseStrategy';
import cfg_conexao_type from '../cfg_conexao_type';

const MongoClient = require('mongodb').MongoClient;

class MongoDb implements DatabaseStrategy {
  private conexao;
  /**
   * Estabelece a conexão com o SGBD
   * @param cfg_conexao é um objeto: {
    sgbd: 'MongoDb',                   <---- Sistema Gerenciador de Banco de Dados (MongoDb, MySQL, MsSql)
    host: '127.0.0.1',                 <---- Host do banco de dados
    port: '27017',                     <---- Porta do banco de dados
    user: 'admin',                     <---- Usuário do banco de dados
    pass: '1234',                      <---- Senha do usuário no banco de dados
    base: 'nome_do_schema_ou_colecao'  <---- Nome do Schema ou Coleção
  }
   */
  private async getConexao(cfg_conexao: cfg_conexao_type): Promise<any> {
    const mongourl = `mongodb://${cfg_conexao.user}:${cfg_conexao.pass}@${cfg_conexao.host}:${cfg_conexao.port}/${cfg_conexao.base}`;
    let conexao = await MongoClient.connect(mongourl, {
      useNewUrlParser: true
    }).catch((err: any) => {
      console.log('ERRO');
      console.log(err);
      throw new Error('Erro ao tentar conexão com o banco de dados!');
    });

    if (!conexao) {
      return false;
    }
    return conexao;
  }

  constructor(cfg_conexao: cfg_conexao_type) {
    this.conexao = this.getConexao(cfg_conexao);
  }

  findOneById(source: string, id: any): any {}

  insertOne(source: string, dados: []): any {}
}
