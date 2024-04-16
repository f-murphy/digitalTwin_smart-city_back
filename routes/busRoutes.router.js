const express = require("express")
const router = express.Router()
const busController = require("../controllers/busRoutes.controller")

router.get("/", busController.getBusRoutes)
router.get("/traffic-jam", busController.getRandomTrafficJam)

module.exports = router