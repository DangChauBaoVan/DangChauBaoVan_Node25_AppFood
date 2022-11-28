const express = require('express');
const orderRoute = require('./orderRoute');
const restaurantRoute = require('./restaurantRoute');
const rootRoute = express.Router();

rootRoute.use("/restaurant",restaurantRoute);
rootRoute.use("/order",orderRoute);

module.exports = rootRoute;