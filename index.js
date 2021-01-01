var express = require('express');
var bodyParser = require('body-parser');
const PORT = 3000;

var app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

let user = {
    name: 'Mario',
    email: 'Mario@gmail.com',
    password: '123',
    levle: 1,
    highScore: 90
}

app.get('/', 
    (req,res)=>{
        res.json({msg: "HELLO WORLD"})
    }
);

app.get('/api/arkanoid/login', 
    (req, res)=>{
        res.json(user)
    }
);


app.listen(PORT, 
    ()=>{
        console.log(`RUN AT PORT ${PORT}`);
    }
)

