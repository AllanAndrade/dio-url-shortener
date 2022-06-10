/**
 * Interface que define a estrutura obrigatória para as Estratégias
 */
export default interface DatabaseStrategy {
  findOneById(source: string, id: string): Promise<any>;
  insertOne(source: string, dados: object): Promise<any>;
}
