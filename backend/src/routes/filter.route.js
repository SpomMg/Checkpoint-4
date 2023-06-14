const router = require("express").Router();
const FilterControllers = require("../controllers/filterControllers");

router.get("/genre", FilterControllers.getgenre);
router.get("/price", FilterControllers.getprice);
router.get("/console", FilterControllers.getconsole);

module.exports = router;
