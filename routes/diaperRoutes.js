const express = require("express");
const router = express.Router();
const requireLogin = require('../middlewares/requireLogin');
const diaperController = require('../controllers/diaperControl');

router
    .route("/:diaperId*?")
    .post(requireLogin, diaperController.addDiaper)
    .put(requireLogin, diaperController.editDiaper)
    .delete(requireLogin, diaperController.deleteDiaper)
    .get(requireLogin, diaperController.getDiaper);

module.exports = router;
