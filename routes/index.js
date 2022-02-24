const express = require("express");

const router = express.Router();
const apiRoutes = require("./api");
const authRoutes = require("./authRoutes");
const protectedRoutes = require("./protected");

router.use("/auth", authRoutes);

router.use("/api", apiRoutes);

router.use("/p_api", protectedRoutes);

module.exports = router;
