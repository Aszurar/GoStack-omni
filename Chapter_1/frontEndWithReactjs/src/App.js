import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import './App.css';
import ImageTest from '../assets/hzd.jpg'
import api from './services/api'

function App(){
  const [projects, setProjects] = useState(['Desenvolvimendo um app', 'Desenvolvimendo um site']);

    useEffect(() => {
      api.get('projects').then(response => {
        setProjects(response.data);
      });
    }, [])

    async function handleAddProject(){
      // setProjects([...projects, `Novo projeto ${Date.now()}`]);
      try{
        const response = await api.post('/projects', {
          title: `Novo projeto ${Date.now()}`,
          owner: 'Lucas de Lima'
        })
          setProjects([...projects, response.data]);
      } catch(err){
        console.log(err);
      }

    }

    return (
    <>
      {/* <img width={400} src={ImageTest} alt="imagem de teste"/> */}
      <Header title="ReactJS"/>
      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>
      
      <button onClick={handleAddProject}>Adicionar um novo projeto</button>
    </>
  );
}

export default App;