import {db} from "../config/db";

export const skillsRepository = {
    getAll: async () => {
        const [rows] = await db.query("SELECT * FROM skills");
        return rows;
    },

    createNewSkill: async (data: any) => {
        const [result]: any = await db.query("INSERT INTO skills (name, category, description) VALUES (?,?,?)",
            [data.name, data.category, data.description]
        );
        return result.insertId;
    },

    getById: async (id: number) => {
        const [rows]: any = await db.query("SELECT * FROM skills WHERE id = ?",
            [id]
        );
        return rows[0];
    },

    delete: async (id: number) => {
        const [result]: any = await db.query("DELETE FROM skills WHERE id = ?",
            [id]
        );
        return result.affectedRows > 0;
    },
    update: async (id: number, data: any) => {
        console.log( "this is skilled ", data);
        const [result]: any = await db.query("UPDATE skills SET name=?, category=?, description=? WHERE id = ?",
            [data.name, data.category, data.description, id]
        );
    },

    getByCategory: async (category: string) => {
        const [rows]: any = await db.query("SELECT * FROM skills WHERE category = ?",
            [category]
        );
        return rows;
    }

}
