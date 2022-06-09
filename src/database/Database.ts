import DatabaseStrategy from './DatabaseStrategy';
import cfg_conexao_type from './cfg_conexao_type';

/**
 * Contexto para a estratégia de acesso a banco de dados
 */
export default class Database {
  private estrategia_usada;

  constructor(cfg_conexao: cfg_conexao_type) {
    let Estrategia = require('./Strategies/' +
      cfg_conexao.sgbd) as DatabaseStrategy;
    this.estrategia_usada = new Estrategia(cfg_conexao);
    // this.conexao = this.estrategia_usada.conexao(cfg_conexao);
  }

  public insertOne(source: string, dados: []) {
    this.estrategia_usada.insertOne(source, dados);
  }

  public findOneById(source: string, id: any) {
    this.estrategia_usada.findOneById(source, id);
  }
}
