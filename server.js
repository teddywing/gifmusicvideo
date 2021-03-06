var express = require('express');
var redis = require('redis');
var engine = require('ejs-locals');

var app = express();
app.use(express.bodyParser());
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.engine('ejs', engine);
app.locals({
    _layoutFile: true
});

var routes = require('./routes')(app);

if (app.settings.env == "production") {
    console.log('Starting production server\n')
    GLOBAL.rds = redis.createClient(6379,
        'nodejitsudb6110685230.redis.irstack.com');
    GLOBAL.rds.auth('nodejitsudb6110685230.redis.irstack.com:f327cfe980c971946e80b8e975fbebb4', function (err) {
        if (err) { throw err; }
        // You are now connected to your redis.
        app.listen(8087);
    });
} else {
    console.log('Starting development server\n');
    GLOBAL.rds = redis.createClient();
    app.listen(8087);
}
