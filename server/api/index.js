const express = require("express");
const router = express.Router();

// any new resource api should imported here and then registered to
// router with proper api endpoint prefix (e.g /user user.route, /items items.route etc.)
const lot = require("./lot");
const slot = require("./slot");

// router.use("/user", user.route);
router.use("/lot", lot.route);
router.use("/slot", slot.route);

module.exports = router;
