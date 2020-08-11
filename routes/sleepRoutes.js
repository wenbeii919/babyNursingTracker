const express = require("express");
const router = express.Router();
const requireLogin = require('../middlewares/requireLogin');
const sleepController = require('../controllers/sleepControl');

router
    .route("/:sleepId*?")
    .post(requireLogin, sleepController.addSleep)
    .put(requireLogin, sleepController.editSleep)
    .delete(requireLogin, sleepController.deleteSleep)
    .get(requireLogin, sleepController.getSleep);

module.exports = router;
