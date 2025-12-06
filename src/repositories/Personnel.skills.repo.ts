import {db} from "../config/db";
import {PersonalSkillData, UpdatePersonalSkillData} from "../dto/personal.skill.data";


export const PersonnelSkillsRepository = {

    getAll: async () => {
        const [rows] = await db.query("SELECT * FROM personnel_skills");
        return rows;
    },
    addSkill: async ( personnelSkill : PersonalSkillData) => {
        console.log(personnelSkill);
        console.log( "this is personal id" ,personnelSkill.personnel_id)
        const [result]: any = await db.query("INSERT INTO personnel_skills ( personnel_id, skill_id, proficiency_level) VALUES (?, ?, ?)", [ personnelSkill.personnel_id, personnelSkill.skill_id, personnelSkill.proficiency_level]);
        return result.insertId;
    },
    delete: async (id: number) => {
     const [result]: any = await db.query("DELETE FROM personnel_skills WHERE id = ?", [id]);
     return result.affectedRows > 0;
    },
    update: async (data: UpdatePersonalSkillData) => {
     const [result]: any = await db.query("UPDATE personnel_skills SET skill_id=?, personnel_id=? WHERE id = ?", [data.skill_id, data.personal_id, data.id]);
     return result.affectedRows > 0;
    },
    getById: async (id: number) => {
     const [rows]: any = await db.query("SELECT * FROM personnel_skills WHERE personal_id = ?", [id]);
     return rows[0];
    }

}
