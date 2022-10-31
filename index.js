import express from "express";
import movies from "./movies.json" assert { type: "json" };
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.options('*', cors());
router.get('/', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed

    res.send('cors problem fixed:)');
});

app.head("/",cors(), (req, res) => res.send("hello from homepage"));
app.get("/movies",cors(), (req, res, next) => {
  res.json(movies);
});

app.listen(port, () => console.log(`server is running at ${port}`));
