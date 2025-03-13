// import { useState } from 'react'
import Name from './components/Name.jsx'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Spotify from './components/Spotify.jsx'
import Spotlight from './components/Spotlight.jsx';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Name />
      <About />
      <Experience />
      <Projects />
      <Spotify />
      <Spotlight />

    </>
  )
}

export default App
