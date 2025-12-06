import {db} from "../config/db";
import {ProjectData} from "../dto/project.data";

export const ProjectRepository = {
    getAll: async () => {
        const [rows]: any = await db.query("SELECT * FROM projects");
        return rows;
    },

    getById: async (id: number) => {
        const [rows]: any = await db.query("SELECT * FROM projects WHERE id = ?", [id]);
        return rows[0];
    },

    create: async (project: ProjectData) => {
        const [result]: any = await db.query(
            `INSERT INTO projects (name, description, status, start_date, end_date) VALUES (?, ?, ?, ?, ?)`,
            [project.project_name, project.description, project.status, project.start_date, project.end_date ]
        );
        return result.insertId;
    },

    update: async (id: number, project: ProjectData) => {
        const [result]: any = await db.query(
            `UPDATE projects SET name=?, description=?, status=?, start_date=?, end_date=? WHERE id=?`,
            [project.project_name, project.description, project.status, project.start_date, project.end_date , id]
        );
        return result.affectedRows > 0;
    },

    delete: async (id: number) => {
        const [result]: any = await db.query("DELETE FROM projects WHERE id = ?", [id]);
        return result.affectedRows > 0;
    }
};
