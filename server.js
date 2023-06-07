const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/tags', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'tags.json'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
