import express from "express"
import bodyParser from 'body-parser'
import movies from './movies.json' assert { type: "json" };
import cors from 'cors'

const app = express();
const port = process.env.PORT || 5000
app.use(cors({
    origin: port,
    method : ['GET', 'PUT', 'PATCH', 'DELETE']
}));


app.get( "/", (req, res) =>  res.send('hello from homepage')
)
app.get("/movies", (req, res) => {
    res.send(movies);
})

app.listen(port, () => console.log(`server is running at ${port}`))