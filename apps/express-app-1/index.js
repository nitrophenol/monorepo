const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => res.send('Hello World from App 1!'));

app.listen(port, () => {
  console.log(`App 1 listening at http://localhost:${port}`);
});
