
import express from "express";
import { initDB } from "./database/db";
import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use("/api", routes)


initDB().then(() => {
    app.listen("4000", () => {
        console.log(`✔ Backend running at http://localhost:4000`);
    });
});
