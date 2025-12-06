export interface PersonalSkillData {
    personnel_id: number;
    skill_id: number;
    proficiency_level: number;
}

export interface UpdatePersonalSkillData {
    id: number;
    personal_id?: number;
    skill_id?: number;
    proficiency_level?: number;
}

export interface PersonalSkillResponseData {
    id: number;
    personal_id: number;
    skill_id: number;
    proficiency_level: number;
}