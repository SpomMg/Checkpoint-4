/* eslint-disable consistent-return */
const joi = require("joi");
const models = require("../models");
const { hashPassword } = require("../utils/auth");

const validate = (data, forCreation = true) => {
  const presence = forCreation ? "required" : "optional";
  return joi
    .object({
      email: joi.string().max(100).presence(presence),
      password: joi.string().max(255).presence(presence),
    })
    .validate(data, { abortEarly: false }).error;
};

const postUser = async (req, res) => {
  const errors = validate(req.body.info);
  if (errors) return res.sendStatus(422);
  const { email, password } = req.body.info;
  const hashed = await hashPassword(password);
  if (!hashed) {
    return res.sendStatus(500);
  }
  await models.user
    .addOne({
      email,
      password: hashed,
    })
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  postUser,
};
