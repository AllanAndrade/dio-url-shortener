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
import url_shortener from './domain/url_shortener';
api.post('/shortener', url_shortener);

// Redireciona para a URL original
import url_redirect from './domain/url_redirect';
api.get('/:id', url_redirect);

/**
 * Inicia o Express
 */
import cfg from './config';
api.listen(cfg.port, () => {
  console.log(`Example app listening on ${cfg.base_url}`);
});
