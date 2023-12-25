import express from "express";
import mustache from "mustache-express";
import { join } from "path";
import routes from "./routes";
import "dotenv/config";

const app = express();

app.engine("mustache", mustache());
app.set("view engine", "mustache");
app.set("views", join(__dirname, "views"));

app.use(express.static(join(__dirname, "../public")));

app.use(routes);

app.use((req, res) => {
  res.render("pages/404");
});

app.listen(process.env.PORT);
