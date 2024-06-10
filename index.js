import cors from "cors";
import express from "express";
import { initRoutes } from "./routes/routes.js";
import { dbAdapter } from "./config/db.js";

import "./config/db.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initRoutes(app);

app.use("/", express.static("./client/build"));

const port = 3333;
app.listen(port, () => { });

app.post('/api/adduser', (req, res) => {
    const data = req.body;
    dbAdapter.get('fighters').push(data).write();
    console.log(data);

    res.status(200).json('good');
})

export { app };
