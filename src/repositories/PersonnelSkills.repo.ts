import { db } from "../config/db";

export class PersonnelSkillsRepository {

    async assignSkill(personnelId: number, skillId: number, proficiencyLevel: number) {
        const [result] = await db.query(
            `INSERT INTO personnel_skills (personnel_id, skill_id, proficiency_level)
             VALUES (?, ?, ?)`,
            [personnelId, skillId, proficiencyLevel]
        );
        return result;
    }

    async getSkills(personnelId: number) {
        const [rows] = await db.query(
            `SELECT
                 ps.id,
                 s.name AS skill_name,
                 s.category,
                 ps.proficiency_level
             FROM personnel_skills ps
                      JOIN skills s ON ps.skill_id = s.id   -- FIXED
             WHERE ps.personnel_id = ?`,
            [personnelId]
        );
        return rows;
    }

    async updateSkill(personnelId: number, skillId: number, proficiencyLevel: number) {
        const [result]: any = await db.query(
            `UPDATE personnel_skills
             SET proficiency_level = ?
             WHERE personnel_id = ? AND skill_id = ?`,
            [proficiencyLevel, personnelId, skillId]
        );
        return result.affectedRows > 0;
    }

    async deleteSkill(personnelId: number, skillId: number) {
        const [result]: any = await db.query(
            `DELETE FROM personnel_skills
             WHERE personnel_id = ? AND skill_id = ?`,
            [personnelId, skillId]
        );
        return result.affectedRows > 0;
    }
}
