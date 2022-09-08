import { Request, Response } from "express";
import database from "../models";

class NivelController {
  static async getAllLevels(req: Request, res: Response) {
    try {
      const allLevels = await database.Niveis.findAll();
      return res.status(200).json(allLevels);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  static async getLevel(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const level = await database.Niveis.findOne({
        where: { id: Number(id) },
      });
      return res.json(level);
    } catch (e: any) {
      return res.status(500).json(e.message);
    }
  }

  static async createLevel(req: Request, res: Response) {
    const body = req.body;
    
    try {
      const level = await database.Niveis.create(body);
      return res.json(level);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  static async updateLevel(req: Request, res: Response) {
    const newInfo = req.body;
    const { id } = req.params;

    try {
      await database.Niveis.update(newInfo, { where: { id: Number(id) } });
      const updatedLevel = await database.Niveis.findOne({
        where: { id: Number(id) },
      });
      return res.json(updatedLevel);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  static async deleteLevel(req: Request, res: Response) {
    const { id } = req.params;
    try {
      await database.Niveis.destroy({ where: { id: Number(id) } });
      return res.json(`Successfully deleted level with ID ${id}`);
    } catch (e) {
      return res.status(500).json(e);
    }
  }
}

export default NivelController;
