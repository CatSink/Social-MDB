const express = require('express');
const mongodb = require('./config/connection');
const routes = require('controllers');
const app = express();
const port = process.env.PORT || 3001;
const connectionStringURI = 'mongodb'
let db;
mongodb.connect(connectionStringURI,
    {useNewUrlParser: true, useUnifiedTopology: true},
    (error, user) => {
        db = user.db();
        app.listen(port, () => {
    console.log(`app listening on http://localhost:${port}`);
        });
    }
);
app.use(express.json());
app.post('/create', (req, res) => {
    db.collection('users').insertOne(
        {username: req.body.username},
        (error, result) => {
            if (error) throw error;
            res.json(result);
        });    
    });
app.get('/read', (req, res) => {
    db.collection('users')
    .find()
    .toArray((error, result) => {
        if (error) throw error;
        res.send(result);
    });
});             

