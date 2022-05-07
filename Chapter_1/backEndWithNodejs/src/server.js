const express = require('express'); 
const {v4: uuidV4, isUuid} = require('uuid')
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors())

const projects = [];

// function logRequest(request, response, next) {
//   const { method, url } = request;
//   const logLabel = `[${method.toUpperCase()}] ${url}`;

//   console.log('1')
//   console.time(logLabel);  
//   next();
//   console.timeEnd(logLabel);
//   console.log('2')
// }

function validadeProjectId(request, response, next) {
  const { id } = request.params;
 
  if (!isUuid(id)) {
    return response.status(400).json({ error: 'Invalid project ID' });
  }
  return next();
} 

// app.use(logRequest);

app.get('/projects', (req, res) => {
  console.log('3')

  const { title } = req.query;

  const projectsFiltered = title ? projects.filter(project => project.title.includes(title)) : projects;
    
  return res.json(projectsFiltered);
})

app.post('/projects', (req, res) => {
  const { title, owner } = req.body;
  const project = { id: uuidV4(), title, owner };

  projects.push(project);

  return res.json(project);
})

app.put('/projects/:id', validadeProjectId,(req, res) => {
  const  { id } = req.params;
  const { title } = req.body;
  projectIndex = projects.findIndex(project => project.id === id);

  if (projectIndex < 0) {
    return res.status(400).json({ error: 'Project not found' });    
  }

  projects[projectIndex].title = title;

  return res.json(projects[projectIndex]);
})

app.delete('/projects/:id', validadeProjectId, (req, res) => {
  const { id } = req.params;
  const projectIndex = projects.findIndex(project => project.id === id);

  if (projectIndex < 0) {
    return res.status(400).json({ error: 'Project not found' });    
  }

  projects.splice(projectIndex, 1);

  return res.status(204).send('Deleted');
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});