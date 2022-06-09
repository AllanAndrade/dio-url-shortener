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
import cfg from '../config';
import { Request, Response, NextFunction } from 'express';
import db from '../database/Database';

export default function shortener_url(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let obj = {
    id: 1,
    url_original: req.body.url_original,
    url_reduzida: cfg.base_url + 1
  };

  res.status(200).send(obj);
}
