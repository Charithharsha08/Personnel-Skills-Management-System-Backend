import { Request, Response } from "express";
import {SkillService} from "../services/skill.service";

export const skillController = {
    getAll: async (req:Request, res: Response) => {
     const skills = await SkillService.getAllSkills();
     res.json(skills);
    },
    getByCategory: async (req:Request, res: Response) => {
        const skills = await SkillService.getByCategory(req.params.category);
        res.json(skills);
    },
    createNewSkill: async (req:Request, res: Response) => {
        const id = await SkillService.createNewSkill(req.body);
        res.status(201).json({message: "Skill created", id});
    },
    getById: async (req:Request, res: Response) => {
        const skill = await SkillService.skillGetById(Number(req.params.id));
        res.json(skill);
    },
    delete: async (req:Request, res: Response) => {
        const deleted = await SkillService.delete(Number(req.params.id));
        res.json({message: deleted ? "Deleted successfully" : "Delete failed"});
    },
    update: async (req:Request, res: Response) => {
        const updated = await SkillService.update(Number(req.params.id), req.body);
        res.json({message: "Updated successfully" });
    }
};