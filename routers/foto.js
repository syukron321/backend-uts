const express = require("express");
const routerFoto = express.Router();

const controllerFoto = require("../controllers/foto");

routerFoto
  .route("/foto")
  .get(controllerFoto.getFoto)
  .post(controllerFoto.insert);

routerFoto
  .route("/foto/:lokasi")
  .get(controllerFoto.getFotoByLokasi)
  .put(controllerFoto.update)
  .delete(controllerFoto.delete);

module.exports = routerFoto;
