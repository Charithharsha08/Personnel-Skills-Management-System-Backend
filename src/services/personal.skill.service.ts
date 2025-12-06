import {PersonnelSkillsRepository} from "../repositories/Personnel.skills.repo";
import {PersonalSkillData, UpdatePersonalSkillData} from "../dto/personal.skill.data";

export const PersonalSkillService = {
    getAllPersonalSkills: async () => {
     return await PersonnelSkillsRepository.getAll();
    },
    addSkill: async (data: PersonalSkillData) => {
        return await PersonnelSkillsRepository.addSkill(data);
    },
    updatePersonalSkill : async (data : UpdatePersonalSkillData) =>{
        return await PersonnelSkillsRepository.update(data);
    },
    deletePersonalSkill: async (id : number) =>{
        return await PersonnelSkillsRepository.delete(id);
    },
    getById: async (id: number) =>{
        return await PersonnelSkillsRepository.getById(id);
    }
}