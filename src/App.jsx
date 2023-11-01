import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Layout from './components/Layout'
import Proyectos from './pages/Proyectos'

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/proyectos' element={<Proyectos />} />
          <Route path='/info' element={<h1>mas informacion xd</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
