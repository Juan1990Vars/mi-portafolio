import { useState } from 'react'
import './App.css'
import Menu from './components/Menu'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import { Skills } from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ParticlesBack from './components/ParticlesBack'
import Links from './components/Links'

function App() {
  const [type, setType] = useState(true)
  const handleToggle = () => {
    setType(!type)
  }
  
  return (
    <main className={type ?'ligth':'dark'} >
      <ParticlesBack />
      <Menu type={type} handleToggle={handleToggle} />
      <Links />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

export default App
