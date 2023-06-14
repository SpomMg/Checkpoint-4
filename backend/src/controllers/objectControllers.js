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

const postObject = (req, res) => {
  const { title, genrevalue, pricevalue, consolevalue, info } = req.body.filter;
  models.object
    .objectpost(
      title,
      parseInt(genrevalue, 10),
      parseInt(pricevalue, 10),
      parseInt(consolevalue, 10),
      info
    )
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const deleteObject = (req, res) => {
  models.object
    .deleteObject(parseInt(req.query.id, 10))
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getAll,
  handleFilter,
  postObject,
  deleteObject,
};
