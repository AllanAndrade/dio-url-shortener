/********************************************************************************************
 * Redireciona uma URL encurtada para a sua URL Original.
 ********************************************************************************************
 * Rota: GET em /url_redirect/:id
 *
 * PARÂMETRO:
 * Recebe: req.params.id contendo o ID da url encurtada
 *
 * RETORNO: VOID
 */
import { Request, Response, NextFunction } from 'express';
import db from '../database/Database';

export default async function shortener_url(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let resultado = await db.findOneById('url_shortener', req.params.id);
  res.redirect(resultado.url_original);
}
