import {ProjectService} from "../services/project.service";
import { Request, Response } from "express";

export const ProjectController = {
    getAllProjects: async (req : Request , res : Response) => {
        const projects = await ProjectService.getAllProjects();
        res.json(projects);
    },
    createProject: async (req : Request , res : Response) => {
        const id = await ProjectService.createProject(req.body);
        res.status(201).json({message: "Project created", id});
    },
    getProjectById: async (req : Request , res : Response) => {
        const project = await ProjectService.getProjectById(Number(req.params.id));
        res.json(project);
    },
    updateProject: async (req : Request , res : Response) => {
        const updated = await ProjectService.updateProject(Number(req.params.id), req.body);
        res.json({message: "Updated successfully" });
    },
    deleteProject: async (req : Request , res : Response) => {
        const deleted = await ProjectService.deleteProject(Number(req.params.id));
        res.json({message: deleted ? "Deleted successfully" : "Delete failed"});
    }
}