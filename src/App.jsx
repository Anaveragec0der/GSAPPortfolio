import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'

import {Navbar, Welcome, Dock} from '@components'
import { Finder, Resume, Safari, Terminal } from '@windows'

function App() {
  gsap.registerPlugin(Draggable)
  return (
    <main>
      <Navbar/>
      <Welcome/>
      <Dock/>

      <Terminal/>
      <Safari/>
      <Resume />
      <Finder/>
    </main>
  )
}

export default App
