const router = require("express").Router();
const UserControllers = require("../controllers/userControllers");
const { verifyPassword } = require("../utils/auth");

router.post("/", UserControllers.postUser);
router.post("/login", UserControllers.getUserByLoginToNext, verifyPassword);

// remarque : le login et register fonctionne techniquement mais ne sont pas utilisé
// pas de vérification de token

module.exports = router;
