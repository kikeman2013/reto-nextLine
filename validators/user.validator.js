const Joi = require("@hapi/joi");
class UserValidator {
  insert = () => {
    return Joi.object()
      .keys({
        userName: Joi.string().required(),
        pass: Joi.string().required(),
        email: Joi.string().required(),
        age: Joi.number().required(),
      })
      .options({ allowUnknown: true, stripUnknown: true });
  };

  get = () => {
    return Joi.object()
      .keys({
        userId: Joi.string().required(),
      })
      .options({ allowUnknown: true, stripUnknown: true });
  };

  update = () => {
    return Joi.object()
      .keys({
        userId: Joi.string().required(),
        userName: Joi.string().optional(),
        email: Joi.string().optional(),
        age: Joi.number().optional(),
      })
      .options({ allowUnknown: true, stripUnknown: true });
  };

  delete = () => {
    return Joi.object()
      .keys({
        userId: Joi.string().required(),
      })
      .options({ allowUnknown: true, stripUnknown: true });
  };
}
module.exports = new UserValidator();
