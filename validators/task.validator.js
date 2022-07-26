
      const Joi = require('@hapi/joi');
      class TaskValidator {
        insert = () => {
          return Joi.object().keys({
            UserId: Joi.number().required(),
            Name: Joi.string().required(),
            Date: Joi.date().required()
          }).options({ allowUnknown: true , stripUnknown: true });
        }

        get = () => {
          return Joi.object().keys({
            UserId: Joi.number().required(),
            Name: Joi.string().required(),
            Date: Joi.date().required()
          }).options({ allowUnknown: true , stripUnknown: true });
        }

        update = () => {
          return Joi.object().keys({
            UserId: Joi.number().required(),
            Name: Joi.string().required(),
            Date: Joi.date().required()
          }).options({ allowUnknown: true , stripUnknown: true });
        }

        delete = () => {
          return Joi.object().keys({
            UserId: Joi.number().required(),
          }).options({ allowUnknown: true , stripUnknown: true });
        }
      }
      module.exports = new TaskValidator();