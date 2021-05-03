import express from "express";
import RestaurantsCtrl from "../api/restaurants.controller.js"
import ReviewsCtrl from "../api/reviews.controller.js"

const router = express.Router();

router.route("/").get(RestaurantsCtrl.apiGetRestaurants);
router.route("/id/:id").get(RestaurantsCtrl.apiGetRestaurantById)
router.route("/cuisine").get(RestaurantsCtrl.apiGetRestaurantCuisine)

router.route("/review")
    .post(ReviewsCtrl.apiPostReview)
    .put(ReviewsCtrl.apiUpdateReview)
    .delete(ReviewsCtrl.apiDeleteReview)


export default router

