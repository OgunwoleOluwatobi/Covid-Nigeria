const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');
var forceSsl = require('force-ssl-heroku');

const app = express();

app.use(forceSsl);
app.use(express.json());

const db = config.get('mongoURI');

mongoose
    .connect(db, { 
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connected'))
    .catch(err => console.log(err));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Started on port ${port}`));