/**
 * Prepara o Express
 */
import express from 'express';
const api = express();
api.use(express.json());

/**
 * Rota post em /shortener
 * Recebe: objeto contendo propriedade url_original (que contém a url a ser reduzida). Exemplo:
 * {
 *     url_original: "https://www.url_a_ser_reduzida.com.br/path/parametros/etc/?page=135&order=0"
 * }
 * Retorna:
 * {
 *     url_original: "https://www.url_a_ser_reduzida.com.br/path/parametros/etc/?page=135&order=0"
 *     url_reduzida: "https://localhost/HASH-DA-URL"
 * }
 */
import shortener_url from './domain/shortener_url';
api.post('shortener', shortener_url);
