const router = require("express").Router();
const ObjectControllers = require("../controllers/objectControllers");

router.get("/", ObjectControllers.getAll);
router.get("/filter", ObjectControllers.handleFilter);
router.post("/", ObjectControllers.postObject);
router.delete("/", ObjectControllers.deleteObject);

module.exports = router;
