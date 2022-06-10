/**
 * Contexto para a estratégia de acesso a banco de dados,
 * a qual é carregada a depender do parâmetro definido no
 * arquivo de configuração: cfg.database.sgbd
 */
import cfg from '../config';
const estrategia_usada = require(`./Strategies/${cfg.database.sgbd}`).default;
import DatabaseStrategy from './DatabaseStrategy';

class Database implements DatabaseStrategy {
  async insertOne(source: string, dados: object): Promise<any> {
    return await estrategia_usada.insertOne(source, dados);
  }

  async findOneById(source: string, id: string): Promise<any> {
    return await estrategia_usada.findOneById(source, id);
  }
}

let obj_db = new Database();
export default obj_db;
