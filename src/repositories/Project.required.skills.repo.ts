import {db} from "../config/db";
import {ProjectRequiredSkillData} from "../dto/project.required.skill";

export const ProjectRequiredSkillsRepository = {
    getAllForProject: async (projectId: number) => {
        const [rows]: any = await db.query(
            `SELECT prs.id, prs.skill_id, s.name AS skill_name, prs.required_level
             FROM project_required_skills prs
             JOIN skills s ON prs.skill_id = s.id
             WHERE prs.project_id = ?`,
            [projectId]
        );
        return rows;
    },

    addSkillToProject: async (projectId: number, data: ProjectRequiredSkillData) => {
        const [result]: any = await db.query(
            `INSERT INTO project_required_skills (project_id, skill_id, required_level)
             VALUES (?, ?, ?)`,
            [projectId, data.skill_id, data.required_level]
        );
        return result.insertId;
    },

    updateProjectSkill: async (projectId: number, skillId: number, data: ProjectRequiredSkillData) => {
        const [result]: any = await db.query(
            `UPDATE project_required_skills
             SET required_level = ?
             WHERE project_id = ? AND skill_id = ?`,
            [data.required_level, projectId, skillId]
        );
        return result.affectedRows > 0;
    },

    deleteProjectSkill: async (projectId: number, skillId: number) => {
        const [result]: any = await db.query(
            `DELETE FROM project_required_skills
             WHERE project_id = ? AND skill_id = ?`,
            [projectId, skillId]
        );
        return result.affectedRows > 0;
    }
};
