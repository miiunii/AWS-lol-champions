const express = require('express');
const router = express.Router();

// Get homepage
router.get('/', function(req, res) {
    res.render('index.ejs');
});

module.exports = router;