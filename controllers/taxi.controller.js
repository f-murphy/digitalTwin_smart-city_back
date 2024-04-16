const taxiEntity = require("../entity/cars")

const getAllDrivers = (req, res) => {
    res.json({
        drivers: taxiEntity.cars
    })
}

const getRandomIncidents = (req, res) => {
    const randomTaxiIndex = Math.floor(Math.random() * taxiEntity.cars.length);
    const randomTaxi = taxiEntity.cars[randomTaxiIndex];

    const randomTaxiIncidentIndex = Math.floor(Math.random() * taxiEntity.taxiIncidents.length);
    const randomTaxiIncident = taxiEntity.taxiIncidents[randomTaxiIncidentIndex]

    const intervention = randomTaxiIncident.name === "Водитель заснул за рулём" ? "true" : "false"

    res.json({
        driver: randomTaxi,
        incident: randomTaxiIncident,
        intervention: intervention
    })
}

module.exports = {
    getAllDrivers, getRandomIncidents
}