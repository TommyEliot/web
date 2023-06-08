const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Этот массив будет хранить ваши данные
let tags = [
  {
    "description": "Паспорт РФ 122",
    "tags": ["Паспорт", "Важное"]
  },

  {
    "description": "СНИЛС",
    "tags": ["страховка", "Важное"]
  }];

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/tags', (req, res) => {
  res.json(tags);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
