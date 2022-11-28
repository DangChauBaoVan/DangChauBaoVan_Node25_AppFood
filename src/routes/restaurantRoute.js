const express = require('express');
const { getAllRes, likeUnlikeRes, getLikeRes, getLikeUser, rateRes, getRateRes, getRateUser, getLikeResByID, getLikeUserByID, getRateResByID, getRateUserID } = require('../controllers/restaurantController');
const restaurantRoute = express.Router();

//Get all restaurant
restaurantRoute.get("/getAllRes", getAllRes);

//Like resraunt if not like before else unlike
restaurantRoute.post("/likeUnlikeRes", likeUnlikeRes);

//Get list like by restaurant
restaurantRoute.get("/getLikeRes", getLikeRes);

//Get list like by restaurant ID
restaurantRoute.get("/getLikeResByID/:res_id", getLikeResByID);

//Get list like by user
restaurantRoute.get("/getLikeUser", getLikeUser);

//Get list like by User ID
restaurantRoute.get("/getLikeUserByID/:user_id", getLikeUserByID);


//Rate restaurant if not rate before else update rate amount by new one
restaurantRoute.post("/rateRes", rateRes);

//Get rate list by restaurant
restaurantRoute.get("/getRateRes", getRateRes);

//Get rate list by restaurant ID
restaurantRoute.get("/getRateResByID/:res_id", getRateResByID);

//Get rate list by user
restaurantRoute.get("/getRateUser", getRateUser);

//Get rate list by user ID
restaurantRoute.get("/getRateUserByID/:user_id", getRateUserID);


module.exports = restaurantRoute;