const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();


const port = process.env.PORT || 2048;


// app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.static(path.join(__dirname, '/../build')));
// app.use(express.static(__dirname + '/../build')); 


app.use(express.json());



//AUTH

app.use((req, res, next)=>{
    
    if(req.method !== 'GET'){
        
        const APIKey = process.env.API_KEY;
        
        if(APIKey === req.headers['authorization']){
            next();
        }else{
            res.status(400).send({msg: 'You forgot your API key!'})
        }
        
    }else{
        next();
    }
})

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

//routes
const hamstersRoute = require('./routes/hamsters');
app.use('/api/hamsters', hamstersRoute);

const chartsRoute = require('./routes/charts');
app.use('/api/charts', chartsRoute);

const gamesRoute = require('./routes/games');
app.use('/api/games', gamesRoute);

const statsRoute = require('./routes/stats');
app.use('/api/stats', statsRoute);

const assetsRoute = require('./routes/assets');
app.use('/assets', assetsRoute);


app.listen(port, ()=>{
    console.log('Server up and running @ port '+ port);
})