
import express from "express";
import { initDB } from "./database/db";

const app = express();

app.use(express.json());




initDB().then(() => {
    app.listen("4000", () => {
        console.log(`✔ Backend running at http://localhost:4000`);
    });
});
