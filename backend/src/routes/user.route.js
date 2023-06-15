const router = require("express").Router();
const UserControllers = require("../controllers/userControllers");

router.post("/", UserControllers.postUser);

module.exports = router;
