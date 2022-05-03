import React, { useState } from 'react';
import { Header } from './components/Header';
import './App.css';
import ImageTest from '../assets/hzd.jpg'

function App(){
  const [projects, setProjects] = useState(['Desenvolvimendo um app', 'Desenvolvimendo um site']);

  function handleAddProject(){
      setProjects([...projects, `Novo projeto ${Date.now()}`]);
    }
  return (
    <>
      <img width={400} src={ImageTest} alt="imagem de teste"/>
      <Header title="ReactJS"/>
      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>
      
      <button onClick={handleAddProject}>Adicionar um novo projeto</button>
    </>
  );
}

export default App;