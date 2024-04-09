const { conexion } = require("./database/connection");
const routes = require("./routes/Game_route")

const express = require("express");
const cors = require("cors")



//aqui conecta a la base
conexion();


//creacion de servidor node 
const app = express();
const puerto = '3900'


//configurar cors
app.use(cors());

// convertir body a objeto js
app.use(express.json()); //recibir datos json 
app.use(express.urlencoded({ extended: true })) //fprm-url-encode

//crear rutas
app.use("/api", routes)





app.get("/", (req, res) => {
    //ruta para comprobar que se crea la api
    console.log("Test")

    return (
        res.status(200).send(`
        <h1>Api</h1>`)
    )
});


//crear servidor y escuchar peticiones
app.listen(puerto, () => {
    console.log('server run in port: ' + puerto)
})


