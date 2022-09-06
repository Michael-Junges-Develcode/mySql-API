import express from "express";
import routes from "../routes/people.routes";

const app = express();

app.use(express.json());

const port = 3000;

app.use(routes);

app.listen(port, () => console.log(`--------- server started on port ${port} ---------`));

