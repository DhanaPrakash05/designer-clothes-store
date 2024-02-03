const express = require("express");
const customDressController = require("../modules/customDresses/customDressController");


const router = express.Router();


router.get("/image/:name",customDressController.getImage);
// router.get("/metadata/:name/:section", customDressController.getDressMetadata);
router.get("/all/metaData/:section", customDressController.getAllDressesMetadata);

module.exports = router;
