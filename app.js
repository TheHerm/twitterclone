const express = require('express');
const app = express();

var counter = 0


app.use('/', function(req, res, next) {
	count();
	console.log(req.method)
	console.log(req.url)
	next();
})
app.use('/special/', function(req, res, next){
	console.log("you reached the special area");
	next();
})

app.get('/special/news', function(req, res, next) {
	res.send("This is your news")
	console.log(res.statusCode)
})


var count= function(){
	counter++
}

app.listen(3000, function(){
	console.log("listening on port 3000")
});
