const express = require("express");
const { verifyAadhaar } = require("../controllers/aadhaarController");
const { verifyPan } = require("../controllers/panController");
const { verifyCompany } = require("../controllers/mcaController");


const router = express.Router();

router.post("/verifyAadhaar", verifyAadhaar);
router.post("/verifyPan", verifyPan);
router.post("/verifyCompany", verifyCompany);

module.exports = router;
