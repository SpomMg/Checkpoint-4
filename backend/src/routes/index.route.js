const router = require("express").Router();
const Object = require("./object.route");

router.use("/object", Object);

module.exports = router;
