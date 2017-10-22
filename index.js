let express = require('express');
let compression = require('compression');
let app = express();

app.use(compression())

app.get('/api/service', function(req, res){
    res.json({
        message: "hello world"
    });
});

app.use('/build-legacy', express.static('build-legacy'));
app.use('/build', express.static('build'));

app.use('/meats', function(req, res){
    res.sendFile(__dirname + '/build/index.html');
});

app.use('/meats/*', function(req, res){
    res.sendFile(__dirname + '/build/index.html');
});

app.use('*', function(req, res){
    res.sendFile(__dirname + '/build-legacy/index.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});