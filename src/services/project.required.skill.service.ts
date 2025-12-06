import {ProjectRequiredSkillsRepository} from "../repositories/Project.required.skills.repo";
import {ProjectRequiredSkillData, ProjectRequiredSkillUpdateData} from "../dto/project.required.skill";

export const ProjectRequiredSkillService = {
    getProjectAllDetails: async (id: number) => {
        return await ProjectRequiredSkillsRepository.getAllForProject(id)
    },
    createProjectRequiredSkill: async (data: ProjectRequiredSkillData) => {
        return await ProjectRequiredSkillsRepository.addSkillToProject(data)
    },
    updateProjectRequiredSkill: async (data: ProjectRequiredSkillUpdateData) => {
        return await ProjectRequiredSkillsRepository.updateProjectSkill(data)
    },
    deleteProjectRequiredSkill: async (projectId: number, skillId: number) => {
        return await ProjectRequiredSkillsRepository.deleteProjectSkill(projectId, skillId)
    }

}
