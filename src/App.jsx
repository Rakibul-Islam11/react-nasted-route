
import { Outlet } from 'react-router-dom'
import Navbar from './all-componenets/navbar/Navbar'
import './App.css'

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  )
}

export default App
