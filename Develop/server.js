// Required Dependencies
const express = require('express');
const fs = require('fs');
const path = require('path');

// Starts the express app and ports the server to either a set port
// or to default to 80
const app = express();
const PORT = process.env.PORT || 3001;





// Listens for setup
app.listen(3001, () => {
    console.log(`API server now on port ${PORT}`)
});