import cfg_conexao_type from './cfg_conexao_type';
export default interface DatabaseStrategy {
  // constructor: (cfg_conexao: cfg_conexao_type) => {};
  findOneById: (source: string, id: any) => {};
  insertOne: (source: string, dados: []) => {};
}
