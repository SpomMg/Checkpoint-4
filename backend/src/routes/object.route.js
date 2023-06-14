const router = require("express").Router();
const ObjectControllers = require("../controllers/objectControllers");

router.get("/", ObjectControllers.getAll);
router.get("/filter", ObjectControllers.handleFilter);
router.post("/", ObjectControllers.postOffer);

module.exports = router;
