const { conexion } = require("./database/connection");
const routes = require("./routes/Game_route")

const express = require("express");
const cors = require("cors")



conexion();

const app = express();
const puerto = '3900'


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/api", routes)


app.get("/", (req, res) => {
    console.log("Test")

    return (
        res.status(200).send(`
        <h1>Api</h1>`)
    )
});


app.listen(puerto, () => {
    console.log('server run in port: ' + puerto)
})


