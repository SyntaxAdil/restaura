import {Navbar} from "./components/Navbar"
import {Hero} from "./components/Hero"
import {Dishes} from "./components/Dishes"
import {About} from "./components/About"
import {Mission} from "./components/Mission"
function App() {
  return (
    <section className="overflow-x-hidden text-neutral-200 antialiased">
      <Hero />
      <Navbar />
      <main className="max-w-7xl mx-auto ">
        <Dishes />
        <About />
        <Mission />

      </main>
      
      
    </section>
  )
}

export default App
