const express = require("express")
const router = express.Router()
const taxiController = require("../controllers/taxi.controller")

router.get("/incident", taxiController.getRandomIncidents)
router.get("/drivers", taxiController.getAllDrivers)

module.exports = router