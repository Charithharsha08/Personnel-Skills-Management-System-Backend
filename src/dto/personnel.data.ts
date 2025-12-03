export interface PersonnelData {
    name: string;
    email: string;
    role: string;
    experience_level: "Junior" | "Mid-Level" | "Senior";
}

export interface UpdatePersonnelData {
    id?: number;
    name?: string;
    email?: string;
    role?: string;
    experience_level?: "Junior" | "Mid-Level" | "Senior";
}

export interface PersonnelResponseData {
    id: number;
    name: string;
    email: string;
    role: string | null;
    experience_level: "Junior" | "Mid-Level" | "Senior";
    created_at: Date;
}
