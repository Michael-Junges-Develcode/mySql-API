import { Request, Response } from "express";
import database from "../models";

class TurmaController {
  static async getAllGroups(req: Request, res: Response) {
    try {
      const allClasses = await database.Turmas.findAll();
      return res.status(200).json(allClasses);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  static async getGroup(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const group = await database.Turmas.findOne({
        where: { id: Number(id) },
      });
      return res.json(group);
    } catch (e: any) {
      return res.status(500).json(e.message);
    }
  }

  static async createGroup(req: Request, res: Response) {
    const body = req.body;

    try {
      const group = await database.Turmas.create(body);
      return res.json(group);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  static async updateGroup(req: Request, res: Response) {
    const newInfo = req.body;
    const { id } = req.params;

    try {
      await database.Turmas.update(newInfo, { where: { id: Number(id) } });
      const updatedGroup = await database.Turmas.findOne({
        where: { id: Number(id) },
      });
      return res.json(updatedGroup);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  static async deleteGroup(req: Request, res: Response) {
    const { id } = req.params;
    try {
      await database.Turmas.destroy({ where: { id: Number(id) } });
      return res.json(`Successfully deleted group with ID ${id}`);
    } catch (e) {
      return res.status(500).json(e);
    }
  }
}

export default TurmaController;
