import express from "express";
import movies from "./movies.json" assert { type: "json" };
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.head("/",cors(), (req, res) => res.send("hello from homepage"));
app.get("/movies",cors([]), (req, res, next) => {
  res.json(JSON.stringify(movies));
  next();
});

app.listen(port, () => console.log(`server is running at ${port}`));
