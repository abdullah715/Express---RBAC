const express = require("express");
const expressListRoutes = require("../../utils/getRegiteredRoutes");

const verifyToken = require("../../middleware/auth");
const checkScope = require("../../middleware/checkScope");
const router = express.Router();
const apiRoutes = require("./api");
const projectRoute = require("./projects");
const roles = require("../../model/roles");

router.use(verifyToken, checkScope);

// registered Routes
router.use("/project", projectRoute);
router.use("/api", apiRoutes);

router.get("/", (req, res) => {
  res.send(expressListRoutes(router));
});

// Assigning all scope to admin Role
roles.filter((e) => e.name == "ADMIN")[0].scope = Object.values(
  expressListRoutes(router)
).flat(1);

module.exports = router;
