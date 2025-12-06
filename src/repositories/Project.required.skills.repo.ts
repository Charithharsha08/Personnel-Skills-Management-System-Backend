import {db} from "../config/db";
import {ProjectRequiredSkillData, ProjectRequiredSkillUpdateData} from "../dto/project.required.skill";

export const ProjectRequiredSkillsRepository = {
    getAllForProject: async (projectId: number) => {
        const [rows]: any = await db.query(
            `SELECT prs.id, prs.skill_id, s.name AS skill_name, prs.minimum_proficiency
             FROM project_required_skills prs
             JOIN skills s ON prs.skill_id = s.id
             WHERE prs.project_id = ?`,
            [projectId]
        );
        return rows;
    },

    addSkillToProject: async (data: ProjectRequiredSkillData) => {
        const [result]: any = await db.query(
            `INSERT INTO project_required_skills (project_id, skill_id, minimum_proficiency)
             VALUES (?, ?, ?)`,
            [data.project_id, data.skill_id, data.minimum_proficiency]
        );
        return result.insertId;
    },

    updateProjectSkill: async (data: ProjectRequiredSkillUpdateData) => {
        const [result]: any = await db.query(
            `UPDATE project_required_skills
             SET minimum_proficiency = ?
             WHERE project_id = ? AND skill_id = ?`,
            [data.minimum_proficiency, data.project_id , data.skill_id]
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
