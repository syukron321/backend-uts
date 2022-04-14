let foto = [
  {
    lokasi: "pulau merah",
    fotografer: "syukron makmun",
    waktu: "sore hari",
    jam: "15:00",
    create: new Date(),
  },
  {
    lokasi: "djwatan",
    fotografer: "syukron makmun",
    waktu: "siang menjelang sore",
    jam: "14:00",
    create: new Date(),
  },
  {
    lokasi: "teluk ijo",
    fotografer: "syukron makmun",
    waktu: "siang hari",
    jam: "13:00",
    create: new Date(),
  },
];

const cari = (arrData, lokasi) => {
  ketemu = -1;
  indeks = 0;
  while (ketemu == -1 && indeks < arrData.length) {
    if (arrData[indeks].lokasi == lokasi) {
      ketemu = indeks;
      return indeks;
    }
    indeks++;
  }
  return -1;
};

module.exports = {
  getFoto: foto,

  insert: (req) => {
    const newItem = {
      lokasi: req.body.lokasi,
      fotografer: req.body.fotografer,
      waktu: req.body.waktu,
      jam: req.body.jam,
    };
    foto.push(newItem);
    return newItem;
  },
  getFotoByLokasi: (req) => {
    lokasi = req.params.lokasi;
    indeks = cari(foto, lokasi);
    if (indeks != -1) {
      const dataFoto = {
        lokasi: foto[indeks].lokasi,
        fotografer: foto[indeks].fotografer,
        waktu: foto[indeks].waktu,
        jam: foto[indeks].jam,
      };
      return dataFoto;
    }
    return indeks;
  },
  update: (req) => {
    lokasi = req.params.lokasi;
    indeks = cari(foto, lokasi);
    if (indeks != -1) {
      foto[indeks].lokasi = lokasi;
      foto[indeks].fotografer = req.body.fotografer;
      foto[indeks].waktu = req.body.waktu;
      foto[indeks].jam = req.body.jam;
      return foto[indeks];
    }
    return -1;
  },

  delete: (req) => {
    lokasi = req.params.lokasi;
    indeks = cari(foto, lokasi);
    ket = "Foto tidak ditemukan";
    if (indeks != -1) {
      foto.splice(indeks, 1);
      ket = "Foto" + lokasi + "telah dihapus";
    }
    return ket;
  },
};
