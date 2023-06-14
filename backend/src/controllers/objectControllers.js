const models = require("../models");

const getAll = (req, res) => {
  models.object
    .allObject()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const handleFilter = (req, res) => {
  const { genremultifilter, pricemultifilter, consolemultifilter } =
    req.query.filter;
  models.object
    .filterAll(
      parseInt(genremultifilter, 10),
      parseInt(pricemultifilter, 10),
      parseInt(consolemultifilter, 10)
    )
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getAll,
  handleFilter,
};
