const express = require('express');
const router = express.Router();

router.use(express.static("public"));


// GET - Home Page
router.get('/', function (req, res) {
    res.sendFile(__dirname + "/contact.html");
});


module.exports = router;