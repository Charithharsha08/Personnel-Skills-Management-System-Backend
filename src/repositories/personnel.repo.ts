import { db } from "../config/db";

export const PersonnelRepository = {
    getAll: async () => {
        const [rows] = await db.query("SELECT * FROM personnel");
        return rows;
    },

    create: async (data: any) => {
        const [result]: any = await db.query(
            "INSERT INTO personnel (name, email, role, experience_level) VALUES (?, ?, ?, ?)",
            [data.name, data.email, data.role, data.experience_level]
        );
        return result.insertId;
    },

    getById: async (id: number) => {
        const [rows]: any = await db.query(
            "SELECT * FROM personnel WHERE id = ?",
            [id]
        );
        return rows[0];
    },

    delete: async (id: number) => {
        const [result]: any = await db.query(
            "DELETE FROM personnel WHERE id = ?",
            [id]
        );
        return result.affectedRows > 0;
    },

    update: async (id: number, data: any) => {
        const [result]: any = await db.query(
            "UPDATE personnel SET name=?, email=?, role=?, experience_level=? WHERE id = ?",
            [data.name, data.email, data.role, data.experience_level, id]
        );
        return result.affectedRows > 0;
    }
};
