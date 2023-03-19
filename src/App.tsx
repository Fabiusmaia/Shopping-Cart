import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import { Home } from './Pages/Home'
import { Store } from './Pages/Store'
import { About } from './Pages/About'
import {Navbar} from './Components/Navbar'
import { ShoppingCartProvider } from './Context/ShoppingCartContext'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="App">
      <ShoppingCartProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      <Routes>
        <Route path="/store" element={<Store />}/>
      </Routes>
      <Routes>
        <Route path="/about" element={<About />}/>
      </Routes>
      </ShoppingCartProvider>

    </div>
  )
}

export default App
