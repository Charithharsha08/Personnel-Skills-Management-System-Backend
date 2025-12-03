export interface SkillData {
    name: string;
    category : string;
    description: string;
}

export interface SkillResponseData {
    id: number;
   name: string;
   category: string;
   description: string;
}

export interface SkillUpdateData {
    id?: number;
    name?: string;
    category?: string;
    description?: string;
}
