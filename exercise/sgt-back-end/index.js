
const pg = require('pg');
const express = require('express');
const app = express();
const jsonMiddleware = express.json();

app.use(jsonMiddleware);

const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});

app.get('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    return res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
  }
  const sql = `
      select *
        from "grades"
       where "gradeId" = $1
    `;
  const params = [gradeId];
  // review the documentation on parameterized queries here:
  // https://node-postgres.com/features/queries#parameterized-query
  // you'll be using this information to prevent SQL injection attacks
  // https://www.youtube.com/watch?v=_jKylhJtPmI
  db.query(sql, params)
    .then(result => {
      // the query succeeded, even if nothing was found
      // the result object will include an array of rows
      // see the docs on results
      // https://node-postgres.com/api/result
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      // the query failed for some reason
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades/', (req, res) => {
  let { name, course, grade } = req.body;
  grade = parseInt(grade, 10);
  const postInput = ` 
  insert into grades ("name", "course", "grade")
        values ($1, $2, $3)
        returning "gradeId", "name", "course", "grade";
  `;
  const values = [name, course, grade];

  if (!name || !course) {
    res.status(400).json({
      error: ' You need to put a name, course and grade'
    });
  } else {
    db.query(postInput, values)
      .then(result => res.status(201).json(result.row[0]))
      .catch(err => {
        res.status(500).json({
          error: 'An unexpected error occurred'
        });
        console.error(err);
      });
  }
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    return res.status(400).json({
      error: '"gradesId" must be a postive integer'
    });
  }
  const sqlPut = `
  update "grades"
  set "grade" = $1
  where "gradeId" = $2 
  returning *
  `;
  const params = [req.body.grade, gradeId];
  db.query(sqlPut, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `I Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    return res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
  }
  const sqlDelete = `
  delete from "grades"
  where "gradeId" = $1
  returning *
  `;
  const params = [gradeId];

  db.query(sqlDelete, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `I Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.status(204).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred'
      });
    });
});

app.listen(3000, () => {
// eslint-disable-next-line no-console
  console.log('listening on port 3000');
});
