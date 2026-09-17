import { Route, Routes } from "react-router"
import Footer from "./Components/Footer/Footer"
import Home from "./Components/Home/Home"
import Movies from "./Components/Movies/Movies"
import Navbar from "./Components/Navbar/Navbar"

function App() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-white flex flex-col justify-between">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
