//importacion de constantes
const express = require("express");
const app = express();
const router = express.Router();

//user	Controller
const user = require("../controllers/user.controller");
//validation to userId
const { validateUser } = require("../middlewares/verifyUser.middleware");

//user	Middleware
const userMiddleware = require("../middlewares/user.middleware");

//routes to user
router.post("/", [validateUser, userMiddleware.insert], user.insertUser); //crear un nuevo usuario
router.get("/", [validateUser], user.getAllUsers); //Obtener todos los usuarios
router.get("/:userId", [validateUser, userMiddleware.get], user.getUser); //Obtener un usuario en especifico
router.put("/", [validateUser, userMiddleware.update], user.updateUser); //Actualizar un usuario en especifico
router.delete("/:userId", [validateUser, userMiddleware.delete], user.deleteUser); //Eliminar un usuario en especifico

//asignacion de la ruta de este modulo para la API
app.use("/api/user", router);

//exportacion de la constante app
module.exports = app;
