const express = require("express");
const customDressController = require("../modules/customDresses/customDressController");
const customDressMiddleware = require("../modules/customDresses/customDressMiddleWare");
const router =express.Router();

router.post(
  "/upload",
  customDressMiddleware.handleUpload,
  customDressController.handleUpload
);

router.get("/metadata/:name/:section", customDressController.getDressMetadata);

module.exports = router;
