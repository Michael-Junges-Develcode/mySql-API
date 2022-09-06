import { Request, Response } from "express";
import { Error } from "sequelize/types";
import database from "../models";

class PessoaController {
  static async getAllPeople(req: Request, res: Response) {
    try {
      const allPeople = await database.Pessoas.findAll();
      return res.status(200).json(allPeople);
    } catch (e: any) {
      return res.status(500).json(e.message);
    }
  }

  static async getPerson(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const person = await database.Pessoas.findOne({
        where: { id: Number(id) },
      });
      return res.json(person);
    } catch (e: any) {
      return res.status(500).json(e.message);
    }
  }
}

export default PessoaController;
