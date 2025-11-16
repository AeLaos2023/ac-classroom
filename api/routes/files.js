const express = require("express");
const router = express.Router();
const fileController = require("../controller/filesController");

router.post("/get", fileController.getList);
router.post("/insert", fileController.insertList);

module.exports = router;
