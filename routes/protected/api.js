var router = require("express").Router();

router.get("/", (req, res) => {
  res.send("api Home");
});

module.exports = router;
