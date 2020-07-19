import express from "express";
import PointsController from "../src/controllers/PointsController";
import ItemsController from "../src/controllers/ItemsController";
import multer from "multer";
import multerConfig from "./config/multer";
import { celebrate, Joi } from "celebrate";
const itemsController = new ItemsController();
const pointsController = new PointsController();
const routes = express.Router();
const upload = multer(multerConfig);

routes.use(express.json());

routes.get("/items", itemsController.index);

routes.post(
  "/points",
  upload.single("image"),
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required().messages({
        "string.empty": `O campo nome não pode ser vazio`,
        "any.required": `O campo nome é obrigatório`,
      }),
      email: Joi.string().required().email().messages({
        "string.email": `Este email não é valido`,
        "string.empty": `O campo email não pode ser vazio`,
        "any.required": `O campo email é obrigatório`,
      }),
      whatsapp: Joi.string().required().messages({
        "string.empty": `O campo whatsapp não pode ser vazio`,
        "any.required": `O campo whatsapp é obrigatório`,
      }),
      latitude: Joi.number().required().messages({
        "string.empty": `Falha ao selecionar um local no mapa`,
        "any.required": `Falha ao selecionar um local no mapa`,
      }),
      longitude: Joi.number().required().messages({
        "string.empty": `Falha ao selecionar um local no mapa`,
        "any.required": `Falha ao selecionar um local no mapa`,
      }),
      city: Joi.string().required().messages({
        "string.empty": `O campo cidade não pode ser vazio`,
        "any.required": `O campo cidade é obrigatório`,
      }),
      uf: Joi.string().required().messages({
        "string.empty": `O campo estado não pode ser vazio`,
        "any.required": `O campo estado é obrigatório`,
      }),
      items: Joi.string().required().messages({
        "string.empty": `Selecione algum item`,
        "any.required": `Selecione algum item`,
      }),
    }),
  }),
  pointsController.create
);

routes.get("/points/:id", pointsController.show);

routes.get("/points", pointsController.index);

export default routes;
