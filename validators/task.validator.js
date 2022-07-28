const Joi = require("@hapi/joi").extend(require("@joi/date"));

class TaskValidator {
  insert = () => {
    return Joi.object()
      .keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        completed: Joi.boolean().optional(),
        deliveryDate: Joi.date().format(["DD/MM/YYYY", "DD-MM-YYYY"]).required(),
        comments: Joi.array().items(Joi.string()).optional().default([]),
        responsable: Joi.string().optional(),
        tags: Joi.array().items(Joi.string()).optional().default([]),
      })
      .options({ allowUnknown: true, stripUnknown: true });
  };

  get = () => {
    return Joi.object()
      .keys({
        taskId: Joi.string().required(),
      })
      .options({ allowUnknown: true, stripUnknown: true });
  };

  update = () => {
    return Joi.object()
      .keys({
        taskId: Joi.string().required(),
        title: Joi.string().optional(),
        description: Joi.string().optional(),
        completed: Joi.boolean().optional(),
        deliveryDate: Joi.date().format(["DD/MM/YYYY", "DD-MM-YYYY"]).optional(),
        comments: Joi.array().items(Joi.string()).optional(),
        responsable: Joi.string().optional(),
        tags: Joi.array().items(Joi.string()).optional(),
      })
      .options({ allowUnknown: true, stripUnknown: true });
  };

  delete = () => {
    return Joi.object()
      .keys({
        taskId: Joi.string().required(),
      })
      .options({ allowUnknown: true, stripUnknown: true });
  };
}
module.exports = new TaskValidator();
