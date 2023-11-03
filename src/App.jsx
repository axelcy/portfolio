import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'react-tooltip/dist/react-tooltip.css'
import './App.css'
import Home from './pages/Home'
import Layout from './components/Layout'
import Proyectos from './pages/Proyectos'
import Favoritos from './pages/Favoritos'

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/proyectos' element={<Proyectos />} />
          <Route path='/favoritos' element={<Favoritos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
