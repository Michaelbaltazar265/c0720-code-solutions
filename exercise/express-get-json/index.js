/* eslint-disable semi */
/* eslint-disable no-console */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */

const express = require('express');
const grades = [
  {
    id: 321,
    name: 'Michael Baltazar',
    course: 'History 101',
    grade: 'A'
  }
];
const app = express();
app.get('/api/grades', (req, res) => {
  res.json(grades);
})

app.listen(3000, () => {
});
