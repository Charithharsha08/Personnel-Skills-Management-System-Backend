import { Request, Response } from "express";
import { PersonnelService } from "../services/personnel.service";

export const PersonnelController = {
    getAll: async (req: Request, res: Response) => {
        const persons = await PersonnelService.getAllPersonnel();
        res.json(persons);
    },

    create: async (req: Request, res: Response) => {
        const id = await PersonnelService.createPersonnel(req.body);
        res.status(201).json({ message: "Personnel created", id });
    },

    getById: async (req: Request, res: Response) => {
        const person = await PersonnelService.getPersonnelById(Number(req.params.id));
        if (!person) return res.status(404).json({ message: "Not found" });
        res.json(person);
    },

    update: async (req: Request, res: Response) => {
        const updated = await PersonnelService.updatePersonnel(Number(req.params.id), req.body);
        if (!updated) return res.status(404).json({ message: "Update failed" });
        res.json({ message: "Updated successfully" });
    },

    delete: async (req: Request, res: Response) => {
        const deleted = await PersonnelService.deletePersonnel(Number(req.params.id));
        if (!deleted) return res.status(404).json({ message: "Delete failed" });
        res.json({ message: "Deleted successfully" });
    }
};