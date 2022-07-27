const { ifExistById } = require("../helpers/bd.user.helper");

const validateUser = (req, res, next) => {
  try {
    // checar que en el header este el UserId
    if (!req.headers.userid)
      throw {
        statusCode: 401,
        message:
          "Autorización denegada. No se encuntra el Identificador de Usuario.",
      };

    // obtener userId
    const userId = req.headers.userid;

    // verificar que exista el usuario
    const validate = ifExistById(userId);

    if (!validate)
      throw {
        statusCode: 401,
        message: "Autorización denegada. No tienes Identificacion de Usuario.",
      };
    //lo guardamos en la variable global request
    req.userInfo = {
      userId,
    };
    next();
  } catch (error) {
    return res.status(error.statusCode || 401).json({
      status: false,
      message: "Autorización denegada. No tienes Identificacion de Usuario.",
      data: null,
    });
  }
};

module.exports = { validateUser };
