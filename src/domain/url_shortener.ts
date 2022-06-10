/****************************************************************************************************
 * Encurta uma URL
 ****************************************************************************************************
 * PARAMETRO:
 * objeto contendo propriedade url_original (que contém a url a ser reduzida). Exemplo:
 * {
 *     "url_original": "https://www.url_a_ser_reduzida.com.br/path/parametros/etc/?page=135&order=0"
 * }
 *
 *
 * RETORNA:
 * Objeto conteodo id, url original e a url encurtada.
 * {
 *     "id": "HASH-DA-URL",
 *     "url_original": "https://www.url_a_ser_reduzida.com.br/path/parametros/etc/?page=135&order=0"
 *     "url_reduzida": "https://localhost/HASH-DA-URL"
 * }
 ***************************************************************************************************/
import cfg from '../config';
import { Request, Response, NextFunction } from 'express';
import db from '../database/Database';

export default async function shortener_url(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let obj_inserir = {
    url_original: req.body.url_original
  };

  let id = await db.insertOne('url_shortener', obj_inserir);
  let resultado = {
    id: id,
    url_original: req.body.url_original,
    url_reduzida: cfg.base_url + id
  };
  res.status(200).send(resultado);
}
