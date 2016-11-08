const express = require('express');
const router = express.Router();
const tBank = require('../tweetBank.js');

router.use(express.static('public'));

router.get('/stylesheets/style.css', function(req, res, next){
	res.sendFile('style.css');
})

router.get('/', function(req, res, next){
	tBank.add("DONALD TRUMP", "MY HANDS ARE YYYUUUUGGGGGEEEEE!!!! #BigGloves");
	var tweets = tBank.list();
	res.render('index', {tweets: tweets});
})







module.exports = router;