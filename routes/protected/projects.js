var router = require("express").Router();

router.get("/self/:id", (req, res) => {
  res.send("Projects Protected");
});

router.get("/others/:id", (req, res) => {
  res.send("Projects Protected");
});

router.post("/self/:id", (req, res) => {
  res.send("Projects Protected");
});

router.post("/others/:id", (req, res) => {
  res.send("Projects Protected");
});

router.put("/self/:id", (req, res) => {
  res.send("Projects Protected");
});

router.put("/others/:id", (req, res) => {
  res.send("Projects Protected");
});

module.exports = router;
