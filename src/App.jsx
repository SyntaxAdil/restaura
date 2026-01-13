import {Navbar} from "./components/Navbar"
import {Hero} from "./components/Hero"
import {Dishes} from "./components/Dishes"
function App() {
  return (
    <section className="overflow-x-hidden text-neutral-200 antialiased">
      <Hero />
      <Navbar />
      <main className="max-w-7xl mx-auto ">
        <Dishes />

      </main>
      
      
    </section>
  )
}

export default App
