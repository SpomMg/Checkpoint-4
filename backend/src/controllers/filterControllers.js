const models = require("../models");

const getgenre = (req, res) => {
  models.filter
    .getGenre()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getprice = (req, res) => {
  models.filter
    .getPrice()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getconsole = (req, res) => {
  models.filter
    .getConsole()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
module.exports = {
  getgenre,
  getprice,
  getconsole,
};
