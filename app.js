const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const BusRouter = require('./routes/busRoutes.router');
const BusIncidentsRouter = require('./routes/busIncidents.router')
const TaxiRouter = require("./routes/taxi.router")

const app = express();
app.use(bodyParser.json());

const PORT = 3000

app.listen(PORT, () => {
    console.log('Server is running on port ', PORT);
})

app.use("/api/routes", BusRouter)
app.use("/api/busIncidents", BusIncidentsRouter)
app.use("/api/taxi", TaxiRouter)