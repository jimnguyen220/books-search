const router = require("express").Router();
const bookRoutes = ("./books");

router.use("/books", bookRoutes);

module.exports = router;