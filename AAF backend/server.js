const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

const api = require('./server/routes/api');
const userRoutes =require('./server/routes/user');
const task = require('./server/routes/task');
const Swal = require('sweetalert2');


const port = 3000;
const app =express();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
  });
app.use(express.static(path.join(__dirname,'dist'))); 

//body parser midleware
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

//routes winch should hadle request
app.use('/api',api);
app.use('/user',userRoutes);
app.use('/task',task);


app.get('*',(req,res )=>{
res.sendFile(path.join(__dirname, 'dist/index.html'));

});

app.listen(port,function(){
    console.log("server running on loacalhost "+port);
});

