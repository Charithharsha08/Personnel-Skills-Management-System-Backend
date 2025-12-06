import {ProjectRepository} from "../repositories/project.repo";

export const ProjectService = {
    getAllProjects: async () => {
     return await ProjectRepository.getAll();
    },
    createProject: async (data: any) => {
        return await ProjectRepository.create(data);
    },
    getProjectById: async (id: number) => {
        return await ProjectRepository.getById(id);
    },
    updateProject: async (id: number, data: any) => {
        return await ProjectRepository.update(id, data);
    },
    deleteProject: async (id: number) => {
        return await ProjectRepository.delete(id);
    }
}