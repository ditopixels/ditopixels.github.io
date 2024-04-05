import { FC, lazy } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

import ContactButton from './components/ContactButton'
import Loadable from './components/Loadeable/Loadable'
import Navbar from './components/Navbar'

const Home = Loadable(lazy(async () => await import('./pages/Home')))
const Projects = Loadable(lazy(async () => await import('./pages/Projects')))
const Resume = Loadable(lazy(async () => await import('./pages/Resume')))
const Contact = Loadable(lazy(async () => await import('./pages/Contact')))

const Router: FC = () => {
  return (
    <HashRouter>
      <Navbar />
      <ContactButton />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </HashRouter>
  )
}

export default Router
