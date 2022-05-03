const express = require('express'); 

const app = express();

app.use(express.json());

app.get('/projects', (req, res) => {
  return res.json(['Projeto 1', 'Projeto 2']);
})

app.post('/projects', (req, res) => {
  const { title, owner } = req.body;
  const project = { title, owner };
  return res.json(project);
})

app.put('/projects/:id', (req, res) => {
  return res.json(['Projeto 1', 'Projeto 2, Projeto 3, Projeto 4']);
})

app.delete('/projects/:id', (req, res) => {
  return res.json(['Projeto 1', 'Projeto 2, Projeto 3, Projeto 4, Projeto 5, Projeto 6']);
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});