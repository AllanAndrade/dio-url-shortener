/**
 * Define o formato do arquivo de configuração do banco de dados
 */
type cfg_conexao_type = {
  sgbd: string;
  host: string;
  port: number;
  user: string;
  pass: string;
  base: string;
};

export default cfg_conexao_type;
