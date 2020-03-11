
const router = require("express").Router();
const messagesController = require("../../controllers/messagesController");

// Matches with "/api/messages"
router.route("/")
    .post(messagesController.create);

module.exports = router;