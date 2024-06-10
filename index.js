import cors from "cors";
import express from "express";
import { initRoutes } from "./routes/routes.js";
// import { dbAdapter } from "./config/db.js";

import "./config/db.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initRoutes(app);

app.use("/", express.static("./client/build"));

const port = 3333;
app.listen(port, () => { console.log(`App running in port ${port}`) });

export { app };
