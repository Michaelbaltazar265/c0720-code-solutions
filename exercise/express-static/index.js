/* eslint-disable no-trailing-spaces */

// eslint-disable-next-line no-unused-vars
const express = require('express');
// eslint-disable-next-line no-unused-vars
const path = require('path'); 
const app = express();
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

app.listen(3000, () => {
});
