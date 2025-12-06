import {ProjectRequiredSkillService} from "../services/project.required.skill.service";
import { Request, Response } from "express";

export const ProjectRequiredSkillController = {
    getAllProjectRequiredSkills: async (req : Request , res : Response) => {
        const projectRequiredSkills = await ProjectRequiredSkillService.getProjectAllDetails(Number(req.params.id));
        res.json(projectRequiredSkills);
    },
    createProjectRequiredSkill: async (req : Request , res : Response) => {
        const id = await ProjectRequiredSkillService.createProjectRequiredSkill(req.body);
        res.status(201).json({message: "Skill created", id});
    },
    deleteProjectRequiredSkill: async (req : Request , res : Response) => {
        const id = await ProjectRequiredSkillService.deleteProjectRequiredSkill(Number(req.params.projectId), Number(req.params.skillId));
        res.json(id)
    },
    updateProjectRequiredSkill: async (req : Request , res : Response) => {
        const id = await ProjectRequiredSkillService.updateProjectRequiredSkill(req.body);
        res.json(id)
    }
}