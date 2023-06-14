const router = require("express").Router();
const ObjectControllers = require("../controllers/objectControllers");

router.get("/", ObjectControllers.getAll);

module.exports = router;
