const busRoutes = require("../entity/busRoutes")

const getBusRoutes = (req, res) => {
    res.json(busRoutes);
}

const getRandomTrafficJam = (req, res) => {
    const randomRouteIndex = Math.floor(Math.random() * busRoutes.length);
    const randomRoute = busRoutes[randomRouteIndex];
    const randomTrafficJamIndex = Math.floor(Math.random() * randomRoute.routes.length);
    const randomTrafficJam = randomRoute.routes[randomTrafficJamIndex];
    const trafficDetour = randomRoute.routes[randomTrafficJamIndex + 1]

    res.json({
        routeName: randomRoute.name,
        trafficJamLocation: randomTrafficJam,
        trafficDetour: trafficDetour
    })

}

module.exports = {
    getBusRoutes, getRandomTrafficJam
}