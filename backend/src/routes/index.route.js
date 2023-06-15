const router = require("express").Router();
const Object = require("./object.route");
const filter = require("./filter.route");
const user = require("./user.route");

router.use("/object", Object);
router.use("/filter", filter);
router.use("/user", user);

module.exports = router;
