export interface ProjectRequiredSkillData {
    project_id: number;
    skill_id: number;
    minimum_proficiency: number;
}

export interface ProjectRequiredSkillResponseData {
    id: number;
    project_id: number;
    skill_id: number;
    minimum_proficiency: number;
}

export interface ProjectRequiredSkillUpdateData {
    id?: number;
    project_id?: number;
    skill_id?: number;
    minimum_proficiency?: number;
}
