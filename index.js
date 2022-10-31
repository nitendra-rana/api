import express from "express"
import movies from './movies.json' assert { type: "json" };
import cors from 'cors'

const app = express();
const port = process.env.PORT || 5000
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 
  }
app.use(cors([corsOptions]));


app.get( "/", (req, res) =>  res.send('hello from homepage')
)
app.get("/movies",cors([corsOptions]), (req, res) => {
    res.send(movies);
})

app.listen(port, () => console.log(`server is running at ${port}`))