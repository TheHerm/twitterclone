const express = require('express');
const app = express();
const nunjucks = require('nunjucks')
const routes = require('./routes/');


app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});



app.use('/', routes);


app.listen(3000, function(){
});
