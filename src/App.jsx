import './App.css'
import Home from './pages/Home/Home'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Products from './pages/Products/Products'
import ProductPage from './pages/ProductPage/ProductPage'

function App() {

  return (

    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Home />} />
      <Route path='/Products'element={<Products />} />
      <Route path='/ProductPage/:id'element={<ProductPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
