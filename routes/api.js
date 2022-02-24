var router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Open Api Path");
});

module.exports = router;
