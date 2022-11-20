// import { useState } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Home from './componentes/paginas/Home';
import Page from './componentes/paginas/Page';
import db from "./assets/db.json"
import Logo from './componentes/Logo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home items={0} /> }></Route>

          <Route path='/' element={ <Logo/> }>
            {db.map((item) => (
              <Route
                key={item.id}
                path={`${item.cliente}`}
                element={<Page data={item} />}
              />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
