import { Request, Response } from "express";
import database from "../models";

class PessoaController {
  static async getAllPeople(req: Request, res: Response) {
    try {
      const allPeople = await database.Pessoas.findAll();
      return res.status(200).json(allPeople);
    } catch (e) {
      return res.status(500).json(e);
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

  static async createPerson(req: Request, res: Response) {
    const body = req.body;
    const exists = await database.Pessoas.findOne({
      where: { email: req.body.email },
    });
    if (!exists) {
      try {
        const person = await database.Pessoas.create(body);
        return res.json(person);
      } catch (e) {
        return res.status(500).json(e);
      }
    } else {
      return res.status(500).json("Email already exists");
    }
  }

  static async updatePerson(req: Request, res: Response) {
    const newInfo = req.body;
    const { id } = req.params;
    const personFound = await database.Pessoas.findOne({
      where: { email: newInfo.email },
    });
    if (!personFound || personFound.id === Number(id)) {
      try {
        await database.Pessoas.update(newInfo, { where: { id: Number(id) } });
        const updatedPerson = await database.Pessoas.findOne({
          where: { id: Number(id) },
        });
        return res.json(updatedPerson);
      } catch (e) {
        return res.status(500).json(e);
      }
    }
    return res.status(500).json("Cannot update to already existing email");
  }

  static async deletePerson(req: Request, res: Response) {
    const { id } = req.params;
    try {
      await database.Pessoas.destroy({ where: { id: Number(id) } });
      return res.json(`Successfully deleted person with ID ${id}`);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  static async getMatricula(req: Request, res: Response) {
    try {
      const { estudanteId, matriculaId } = req.params;
      const person = await database.Matriculas.findOne({
        where: { id: Number(matriculaId), estudante_id: Number(estudanteId) },
      });
      return res.json(person);
    } catch (e: any) {
      return res.status(500).json(e.message);
    }
  }

  static async createMatricula(req: Request, res: Response) {
    const { estudanteId } = req.params;
    const body = { ...req.body, estudante_id: Number(estudanteId) };
    const exists = await database.Pessoas.findOne({
      where: { email: req.body.email },
    });
    if (!exists) {
      try {
        const matrícula = await database.Pessoas.create(body);
        return res.json(matrícula);
      } catch (e) {
        return res.status(500).json(e);
      }
    } else {
      return res.status(500).json("Email already exists");
    }
  }
}

export default PessoaController;
