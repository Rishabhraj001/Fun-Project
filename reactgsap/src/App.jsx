import React from "react"
import { Link, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Agence from "./pages/Agence"
import Projects from "./pages/Projects"
import Navbar from "./components/Navigation/Navbar"
import Fullscreennav from "./components/Navigation/Fullscreennav"

const App = () => {
  return (
    <div className="text-white" >
       {/* <Navbar/> */}
       <Fullscreennav/>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes> */}
    </div>
  )
}

export default App
