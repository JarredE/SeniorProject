// setup for the port and the express use
const express = require('express');
const app = express();
const port = 3000;

// static files that will be used 
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/js', express.static(__dirname + 'public/script'));


//display index.html

app.get('',(req , res) => {
res.sendFile(__dirname + '/index.html')
});


// lisetn on port 3000
app.listen(port);

