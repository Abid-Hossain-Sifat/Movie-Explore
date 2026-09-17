import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Stats from "./Components/Stats/Stats"

function App() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-white flex flex-col justify-between">
      <Navbar />
      <Hero />
      <Stats />
      <Footer />
    </div>
  )
}

export default App
