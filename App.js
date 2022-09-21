import Navbar from "./Navbar"
import Home from "./pages/Home"
import About_us from "./pages/About_us"
import Contact_us from "./pages/Contact_us"
import Models from "./pages/Models"
import Portfolio from "./pages/Portfolio"


import { Route, Routes } from "react-router-dom"



function App() {
    return (
    <>
    <Navbar />
    <div ClassName="container">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About_us" element={<About_us />} />
            <Route path="/Contact_us" element={<Contact_us />} />
            <Route path="/Models" element={<Models />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            </Routes>
    </div>
    </>
 )
}

export default App 