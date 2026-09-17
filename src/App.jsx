import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"

function App() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-white">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App
