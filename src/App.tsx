
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RoverImages from './components/RoverImages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RoverImages/>} path="/" />
        
      </Routes>
    </BrowserRouter>
  )
}
export default App
