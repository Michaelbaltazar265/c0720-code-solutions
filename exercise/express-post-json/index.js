/* eslint-disable indent */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable no-console */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */

const express = require('express');
const app = express();
const grades = [];
let nextId = 1;
const jsonMiddleware = express.json();
app.use(jsonMiddleware);
app.get('/api/grades', (req, res, next) => {
    res.json(grades);
  })

  app.post('/api/grades', (req, res, next) => {
    const body = req.body;
    body.id = nextId++;
    res.json(grades);
    grades.push(body);
    // res.status(201).json(body);
  })
  app.listen(3000, () => {
      console.log("Listening on port 3000")
});