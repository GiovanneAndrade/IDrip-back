import { Request, Response } from "express";
import * as allCategory from "../repositories/users.repository";
import * as allFavorities from "../repositories/favorities.repositories";

async function postCategoryController(req: Request, res: Response) {
  const {
    name,
    email,
    password,
    cpf,
    phone,
  }: {
    name: string;
    email: string;
    password: string;
    cpf: string;
    phone: number;
  } = req.body;
  const result = await allCategory.postCategoryRepository({
    name,
    email,
    password,
    cpf,
    phone,
  });
  const user = result.id;
  await allFavorities.postFavoritiesCreateRepository({ user });

  return res.send(result);
}

export { postCategoryController };
