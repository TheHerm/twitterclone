const express = require('express');
const app = express();
const nunjucks = require('nunjucks')
const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

var counter = 3

var locals = {
	title: "An Example",
	people: [
		{name: 'Gandalf'},
		{name: 'Frodo'},
		{name: "Hermione"}
	]
};

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function(err, output) {
	if (err) throw err;
	console.log(output)
})


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
	res.render('index', {title: 'Hall of Fame', people: people})
	console.log(res.statusCode)
})


var count= function(){
	counter++
}

app.listen(3000, function(){
	console.log("listening on port 3000")
});
