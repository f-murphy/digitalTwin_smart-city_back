const express = require("express")
const router = express.Router()
const busIncidentsController = require("../controllers/busIncidents.controller")

router.get("/incidents", busIncidentsController.getRandomIncidents)
router.get("/buses", busIncidentsController.getAllBuses)
router.get("/incidents-list", busIncidentsController.getAllIncidents)


module.exports = router