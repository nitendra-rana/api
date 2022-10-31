import express from "express"
import bodyParser from 'body-parser'
import cors from 'cors'
import movies from './movies.json' assert { type: "json" };

const app = express();
app.use(cors());
const port = process.env.PORT || 5000

app.use(bodyParser.json()); 
app.get( "/", (req, res) =>  res.send('hello from homepage')
)
app.get("/movies", (req, res) => {
    res.send(movies);
})

app.listen(port, () => console.log(`server is running at ${port}`))