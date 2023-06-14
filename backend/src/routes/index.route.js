const router = require("express").Router();
const Object = require("./object.route");
const filter = require("./filter.route");

router.use("/object", Object);
router.use("/filter", filter);

module.exports = router;
