
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NewComponent from './components/NewComponent'
import RoverImages from './components/RoverImages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RoverImages/>} path="/" />
        <Route element={<NewComponent/>} path="/newComponent" />
        
      </Routes>
    </BrowserRouter>
  )
}
export default App
