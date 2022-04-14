const modelFoto = require("../models/foto");

module.exports = {
  getFoto: (req, res) => {
    foto = modelFoto.getFoto;
    res.json(foto);
  },

  insert: (req, res) => {
    //Ambil data request dari frontend
    newItem = modelFoto.insert(req);
    res.status(201).json(newItem);
  },

  getFotoByLokasi: (req, res) => {
    dataFoto = modelFoto.getFotoByLokasi(req);
    if (dataFoto != -1) {
      res.json(dataFoto);
    } else {
      res.send("Foto: " + req.params.lokasi + "tidak ditemukan");
    }
  },

  update: (req, res) => {
    foto = modelFoto.update(req);
    if (foto != -1) {
      res.json(foto);
    }
    res.send("Data tugas tidak ditemukan");
  },

  delete: (req, res) => {
    ket = modelFoto.delete(req);
    res.send(ket);
  },
};
