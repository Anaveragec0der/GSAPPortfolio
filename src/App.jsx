import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'

import { Navbar, Welcome, Dock, Home } from '@components'
import { Contact, Finder, ImageViewer, PhotoViewer, Resume, Safari, Terminal, Text } from '@windows'

function App() {
  gsap.registerPlugin(Draggable)
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <ImageViewer />
      <Contact />
      <Home />
      <PhotoViewer />
    </main>
  )
}

export default App
