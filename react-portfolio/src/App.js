import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Layout from './Components/Layout'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'

import './App.scss'

function App() {
  return (
    <>
    <Routes>
      <Route path ="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About />} />
      <Route path="Portfolio" element={<Portfolio />} />
      <Route path="Contact" element={<Contact />} />
      </Route>
      </Routes> 
    </>
  )
}

export default App
