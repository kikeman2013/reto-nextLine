//importacion de funcion helper para validacion de usuarios
const { ifExistById } = require("../helpers/bd.user.helper");

//funcion que valida si un usuario tiene accso a consultar la API
const validateUser = (req, res, next) => {
  try {
    // checar que en el header este el UserId sino mandar un error con mesaje de que no tiene permiso de acceder a la API
    if (!req.headers.userid) throw { statusCode: 401, message: "Autorización denegada. No se encuntra el Identificador de Usuario." };

    // obtener userId
    const userId = req.headers.userid;

    // verificar que exista el usuario
    const validate = ifExistById(userId);
    //en caso de que no sea valido el usario mandar un error con mesaje de que no tiene permiso de acceder a la API
    if (!validate) throw { statusCode: 401, message: "Autorización denegada. No tienes Identificacion de Usuario." };

    //lo guardamos en la variable llamada userInfo dentro de la variable global request (req)
    req.userInfo = {
      userId,
    };
    next();
  } catch (error) {
    return res
      .status(error.statusCode || 401)
      .json({ status: false, message: "Autorización denegada. No tienes Identificacion de Usuario." });
  }
};
//exportamos la funcion para utlizarla en otros modulos
module.exports = { validateUser };
