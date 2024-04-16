const incidents = require("../entity/busIncidents")
const busRoutes = require("../entity/busRoutes")

const getAllBuses = (req, res) => {
    res.json({
        buses: incidents.buses
    })
}

const getAllIncidents = (req, res) => {
    res.json({
        incidents: incidents.incidents
    })
}

const getRandomIncidents = (req, res) => {
    const randomBusIndex = Math.floor(Math.random() * incidents.buses.length);
    const randomBus = incidents.buses[randomBusIndex];

    const randomIncidentIndex = Math.floor(Math.random() * incidents.incidents.length);
    const randomIncident = incidents.incidents[randomIncidentIndex];

    const randomRouteIndex = Math.floor(Math.random() * busRoutes.length);
    const randomRoute = busRoutes[randomRouteIndex];

    res.json({
        bus: randomBus.name,
        incident: randomIncident.name,
        route: randomRoute.name,
    })
}

module.exports = {
    getAllBuses, getAllIncidents, getRandomIncidents
}