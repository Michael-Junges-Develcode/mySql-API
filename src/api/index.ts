import express from "express";
import people from "../routes/people.routes";
import levels from "../routes/levels.routes";
import classes from "../routes/classes.routes";

const app = express();

app.use(express.json());

const port = 3000;

app.use(people, levels, classes);

app.listen(port, () => console.log(`--------- server started on port ${port} ---------`));

