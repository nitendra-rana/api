import express from "express";
import movies from "./movies.json" assert { type: "json" };
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.options('*', cors());


app.get("/", (req, res) => res.send("hello from homepage"));
app.get("/movies", (req, res, next) => {
  res.json(movies);
});

app.listen(port, () => console.log(`server is running at ${port}`));
