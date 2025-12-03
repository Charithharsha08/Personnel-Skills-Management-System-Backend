import {PersonnelRepository} from "../repositories/personnel.repo";

export const PersonnelService = {
    getAllPersonnel: async () => {
        return await PersonnelRepository.getAll();
    },

    createPersonnel: async (data: any) => {
        return await PersonnelRepository.create(data);
    },

    getPersonnelById: async (id: number) => {
        return await PersonnelRepository.getById(id);
    },

    updatePersonnel: async (id: number, data: any) => {
        return await PersonnelRepository.update(id, data);
        },

    deletePersonnel: async (id: number) => {
        return await PersonnelRepository.delete(id);
    }
};
