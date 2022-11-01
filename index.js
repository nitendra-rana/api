import express from "express";
import movies from "./movies.json" assert { type: "json" };
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;

app.head("/",cors(), (req, res) => res.send("hello from homepage"));
app.get("/movies.json",cors({
  origin:'*'
}), (req, res, next) => {
  res.json(JSON.stringify(movies));
  next();
});

app.listen(port, () => console.log(`server is running at ${port}`));
