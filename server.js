const express = require('express');
const axios=require('axios');
const cors = require('cors');
var history = require('connect-history-api-fallback');
var path = require('path');
var serveStatic = require('serve-static');
const app = express();
app.use(cors())
app.use(history({verbose: true}))
app.use(serveStatic(path.join(__dirname, '/dist')))
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);



app.post('/',function(req,res){
    axios.get(`http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=11f12b3f9682459d8c90cce287e6f834`)
    .then(response=>res.json(response.data)).catch(err => {
        console.log(err)
        })
        
})

