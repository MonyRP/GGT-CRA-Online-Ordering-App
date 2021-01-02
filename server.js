const express = require('express');

const db = require('./config/database');

const app = express();

app.use(express.json({ extended: false }));

db.execute('SELECT * FROM ingredients')
  .then(([rows]) => {
    console.log('rows: ' + JSON.stringify(rows, null, '\t'));
    // console.log('fieldData: ' + JSON.stringify(fieldData, null, '\t'));
  })
  .catch((error) => {
    console.log('error from select statement: ' + error);
  });

app.get('/', (req, res) => {
  res.send('Running online-ordering-api');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
