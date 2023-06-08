const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));  // указываете здесь путь к папке, где лежит ваш index.html


const TagSchema = new mongoose.Schema({
  description: String,
  tags: [String]
});

const Tag = mongoose.model('Tag', TagSchema);

mongoose.connect('mongodb://127.0.0.1/tagsDB', {useNewUrlParser: true, useUnifiedTopology: true});

app.get('/tags', async (req, res) => {
  const tags = await Tag.find();
  res.json(tags);
});

app.post('/tags', async (req, res) => {
  const newTag = new Tag({
    description: req.body.description,
    tags: req.body.tags
  });

  try {
    await newTag.save();
    res.status(201).json(newTag);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
