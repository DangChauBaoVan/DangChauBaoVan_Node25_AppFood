const express = require('express');
const orderFood = require('../controllers/orderController');
const orderRoute = express.Router();

orderRoute.post("/orderFood",orderFood);

module.exports = orderRoute;