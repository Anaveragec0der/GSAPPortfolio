import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'

import {Navbar, Welcome, Dock} from '@components'
import { Resume, Safari, Terminal } from '@windows'

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
    </main>
  )
}

export default App
