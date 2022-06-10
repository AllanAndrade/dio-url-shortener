import DatabaseStrategy from '../DatabaseStrategy';
import cfg_conexao_type from '../cfg_conexao_type';
import cfg from '../../config';
const mongo = require('mongodb');

class MongoDb implements DatabaseStrategy {
  // Estabelece a conexão com o SGBD
  async getDb(cfg_conexao: cfg_conexao_type) {
    const mongourl = `mongodb://${cfg_conexao.user}:${cfg_conexao.pass}@${cfg_conexao.host}:${cfg_conexao.port}/${cfg_conexao.base}`;

    let conexao = await mongo.MongoClient.connect(mongourl, {
      useNewUrlParser: true
    }).catch((err: any) => {
      console.log('ERRO');
      console.log(err);
      throw new Error('Erro ao tentar conexão com o banco de dados!');
    });
    let db = conexao.db(cfg_conexao.base);
    return db;
  }

  // Busca e retorna um registro a partir do ID
  async findOneById(source: string, id: string) {
    try {
      const db = await this.getDb(cfg.database);
      let collection = db.collection(source);

      let res = await collection
        .find({ _id: mongo.ObjectId(id) }, { _id: 1 })
        .toArray();

      return res[0];
    } catch (err) {
      throw new Error(
        'Erro ao tentar localizar um registro no banco de dados.'
      );
    }
  }

  // Insere um novo registro em uma coleção e retorna o ID do mesmo.
  async insertOne(colecao: string, dados: any) {
    try {
      const db = await this.getDb(cfg.database);
      let collection = db.collection(colecao);
      let res = await collection.insertOne(dados);

      return res.insertedId;
    } catch (err) {
      throw new Error('Erro ao tentar inserir um registro no banco de dados.');
    }
  }
}

let obj_mongo = new MongoDb();
export default obj_mongo;
