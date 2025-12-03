// app.ts
import express, {Express, Request, Response} from "express";
import cors from "cors";
import personnelRoutes from "./routes/personnel.routes";
import {skillController} from "./controller/skill.controller";
import skillRoutes from "./routes/skill.routes";

// 1. Initialize the express app
const app: Express = express();

// Enable CORS for all routes
app.use(express.json());
app.use(cors());

const allowedOrigins = ["http://localhost:5173"];

const crsOptions = {
    origin: (origin: string | undefined, callback: (error: Error | null, allow?: boolean) => void) => {
        if (!origin || allowedOrigins.includes(origin)) { // postman request allowed
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    }
}

app.use(cors(crsOptions))
app.use("/api/v1/personnel", personnelRoutes);
app.use("/api/v1/skills", skillRoutes);



// 3. Expert the app to use outside (in index.ts)
export default app;