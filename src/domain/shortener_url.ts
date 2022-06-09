import { Request, Response, NextFunction } from 'express';
import { nanoid } from 'nanoid';

export default function shortener_url(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let id = nanoid();
  console.log(id);

  res.status(200).send();
}
