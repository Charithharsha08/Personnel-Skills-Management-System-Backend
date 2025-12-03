import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

export const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT),
    connectionLimit: 10,
});

export const testConnection = async () => {
    try {
        const [rows] = await db.query("SELECT 1");
        console.log("✅ MySQL Connected Successfully");
    } catch (err) {
        console.error("❌ MySQL Connection Failed:", err);
        process.exit(1);
    }
};
