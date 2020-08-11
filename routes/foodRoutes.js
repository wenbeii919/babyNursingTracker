const express = require("express");
const router = express.Router();
const requireLogin = require('../middlewares/requireLogin');
const foodController = require('../controllers/foodControl');

router
    .route("/:foodId*?")
    .post(requireLogin, foodController.addFood)
    .put(requireLogin, foodController.editFood)
    .delete(requireLogin, foodController.deleteFood)
    .get(requireLogin, foodController.getFood);

module.exports = router;
