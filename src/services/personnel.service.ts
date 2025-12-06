import {PersonnelRepository} from "../repositories/personnel.repo";
import {PersonnelData, UpdatePersonnelData} from "../dto/personnel.data";

export const PersonnelService = {
    getAllPersonnel: async () => {
        return await PersonnelRepository.getAll();
    },

    createPersonnel: async (data: PersonnelData) => {
        return await PersonnelRepository.create(data);
    },

    getPersonnelById: async (id: number) => {
        return await PersonnelRepository.getById(id);
    },

    updatePersonnel: async (id: number, data: UpdatePersonnelData) => {
        return await PersonnelRepository.update(id, data);
        },

    deletePersonnel: async (id: number) => {
        return await PersonnelRepository.delete(id);
    }
};
