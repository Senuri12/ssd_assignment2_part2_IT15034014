const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use('/',express.static(__dirname + '/view/mainPage'));

// route to the starting page
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/view/mainPage/index.html')

});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
