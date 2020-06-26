var express = require('express'),
app = express(),
port = 3000

var todoRoutes = require('./routes/todos')

app.get('/', function(req, res){
    res.send("HI, THERE FROM ROOT ROUTE!")
});

app.use('/api/todos', todoRoutes);

app.listen(port, function(){
    console.log("APP IS RUNNING on PORT 3000")
})