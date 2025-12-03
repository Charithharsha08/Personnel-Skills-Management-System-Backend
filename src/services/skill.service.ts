import {skillsRepository} from "../repositories/skill.repo";

export const SkillService = {
    getAllSkills: async () => {
        return await skillsRepository.getAll();
    },
    getByCategory: async (category: string) => {
        return await skillsRepository.getByCategory(category);
    },
    createNewSkill: async (data: any) => {
        return await skillsRepository.createNewSkill(data);
    },
    skillGetById: async (id: number) => {
        return await skillsRepository.getById(id);
    },
    delete: async (id: number) => {
        return await skillsRepository.delete(id);
    },
    update: async (id: number, data: any) => {
        return await skillsRepository.update(id, data);
    }
}