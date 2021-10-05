
const express = require('express');
const path = require('path');
const router = require('./server/router/router');
const adminRouter = require('./server/router/routerAdmin');
const session = require('express-session');
const http = require('http');

// connection to databases;

require('./server/database/database');
require('dotenv').config()
// Creating server
const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 8800;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use(session({
    secret: 'sec',
    resave: false,
    saveUninitialized: true
}));

// All assets

app.use('/css', express.static(path.resolve(__dirname, 'assets/css')));
app.use('/images', express.static(path.resolve(__dirname, 'assets/images')));
app.use('/', router);
app.use('/panel', adminRouter);

server.listen(PORT, '192.168.1.3',() => {
    console.log("http://192.168.1.3:8800");
})