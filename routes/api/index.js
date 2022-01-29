const express = require('express');
const router = express.Router();

const locationRoutes = require("./locationController");
const travellerRoutes = require("./travellerController");
const tripRoutes = require("./tripController");

router.use("/locations", locationRoutes);
router.use("/travellers", travellerRoutes);
router.use("/trips", tripRoutes);

module.exports = router;