const { Router } = require("express"); //express.router
const router = Router();


const { searchUser, create, getAll, update } = require("../controllers/GameController")

//rutas de pruebas
router.get('/search-user/:string', searchUser);
router.get('/all', getAll);
router.post('/update-user', update);




//ruta util
router.post('/create', create);


module.exports =
    router;
