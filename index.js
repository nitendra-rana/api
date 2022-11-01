import express from "express";
import movies from "./movies.json" assert { type: "json" };
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors({
  origin: '*'
}));
const port = process.env.PORT || 5000;


app.head("/",cors(), (req, res) => res.send("hello from homepage"));
app.get("/movies",cors({
  origin: true
}), (req, res, next) => {
  res.status(200).json(movies);
  next();
});

app.listen(port, () => console.log(`server is running at ${port}`));
