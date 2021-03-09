// Required Dependencies
const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Starts the express app and ports the server to either a set port
// or to default to 80
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Listens for setup
app.listen(3001, () => {
    console.log(`API server now on port ${PORT}`)
});