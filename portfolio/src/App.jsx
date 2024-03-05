import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProjectGallery from './components/ProjectGallery';

function App() {
 // const [count, setCount] = useState(0)

  return (
    <Router>
      <div>App Root</div>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<div>About Page</div>} />
          <Route path='/projects' element={<ProjectGallery />} />
          <Route path='/project' element={<div>Project Page</div>} />
          <Route path='/contact' element={<div>Contact Page</div>} />
      </Routes>
    </Router>
  )
}

export default App
