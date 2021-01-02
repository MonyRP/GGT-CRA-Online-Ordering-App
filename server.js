const express = require('express');
const db = require('./config/database');
const path = require('path');
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

console.log('process.env.NODE_ENV: ' + process.env.NODE_ENV);
// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
