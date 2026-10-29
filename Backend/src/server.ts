
import express from "express";
import { initDB } from "./database/db";
import { routes } from "./routes";
import cors from "cors";
const app = express();

app.use(express.json());


app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "PUT", "DELETE", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: false,
}))

app.use("/api", routes)

initDB().then(() => {
    app.listen("4000", () => {
        console.log(`✔ Backend running at http://localhost:4000`);
    });
});
