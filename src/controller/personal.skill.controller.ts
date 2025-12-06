import {PersonalSkillService} from "../services/personal.skill.service";
import { Request, Response } from "express";

export const PersonalSkillController = {
    getAllPersonalSkills: async (req : Request, res : Response) => {
        const allSkills = await PersonalSkillService.getAllPersonalSkills();
        res.json(allSkills);
    },
    addSkill: async (req : Request, res : Response) => {
     const id = await PersonalSkillService.addSkill(req.body);
     res.json(id)
    },
    updatePersonalSkill: async (req : Request, res : Response) => {
        const id = await PersonalSkillService.updatePersonalSkill(req.body);
        res.json(id)
    },
    deletePersonalSkill: async (req : Request, res : Response) => {
        const id = await PersonalSkillService.deletePersonalSkill(req.body);
        res.json(id)
    },
    getSkillById: async (req : Request, res : Response) => {
        const personId = await PersonalSkillService.getById(Number(req.params.id));
    }
}