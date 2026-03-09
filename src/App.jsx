import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'

import {Navbar, Welcome, Dock} from '@components'
import { Terminal } from '@windows'

function App() {
  gsap.registerPlugin(Draggable)
  return (
    <main>
      <Navbar/>
      <Welcome/>
      <Dock/>

      <Terminal/>
    </main>
  )
}

export default App
