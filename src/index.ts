/**
 * Prepara o Express
 */
import express, { application } from 'express';
const api = express();
api.use(express.json());

/**
 * Configura Rotas
 */
// Encurta a URL
import shortener_url from './domain/shortener_url';
api.post('/shortener', shortener_url);

// Redireciona para a URL original

/**
 * Inicia o Express
 */
import cfg from './config';
api.listen(cfg.port, () => {
  console.log(`Example app listening on ${cfg.base_url}`);
});
