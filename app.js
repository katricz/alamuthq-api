const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path')

require('./models/home');
const Home = mongoose.model('Home');

require('./models/crypt');
const Crypt = mongoose.model('Crypt');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET, PUT, POST, DELETE');
    res.header("Access-Control-Allow-Headers", 'X-PINGOTHER, Content-Type, Authorization')
    app.use(cors());
    next();
})

app.use(
    'img', 
    express.static(path.resolve(__dirname,'img', 'crypt'))
);


mongoose.connect('mongodb+srv://katricz:priest@alamuthq.pkjvo.mongodb.net/homePage?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conexão com MongoDB - Sucesso')
}).catch((erro) => {
    console.log('Erro ao conectar com MongoDB - ' + erro);
});

app.get("/home", (req, res) => {
    Home.findOne({}).then((home) => {
        return res.json(home);
    }).catch((err) => {
        return res.status(400).json({
            mensage: 'Cant find any data',
            error: true,
            appErrorCode: 'EBD1'
        });
    })
});

app.post("/home", (req, res) => {
    Home.create(req.body, (err) => {
        if(err) return res.status(400).json({
            message: 'ErrorBD: Fail to save page input',
            error: true,
            appErrorCode: 'EBD2'
        })
    })
    return res.json({
        message: 'Data registered successfully',
        error: false
    })
});

app.get("/crypt", (req, res) => {
    Crypt.find({}).then((crypt) => {
        return res.json(crypt);
    }).catch((err) => {
        return res.status(400).json({
            mensage: 'Cant find any data',
            error: true,
            appErrorCode: 'EBD3'
        });
    })
});

app.post("/crypt", (req, res) => {
    Crypt.create(req.body, (err) => {
        if(err) return res.status(400).json({
            message: 'ErrorBD: Fail to save page input',
            error: true,
            appErrorCode: 'EBD4'
        })
    })
    return res.json({
        message: 'Data registered successfully',
        error: false
    })
});


app.listen(4000, () => {
    console.log("Servidor iniciado https://localhost:4000")
});

