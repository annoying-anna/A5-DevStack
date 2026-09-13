import { useState, useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechnologiesSection from './components/TechnologiesSection'
import YourStack from './components/YourStack'
import Footer from './components/Footer'
import { TECHNOLOGIES } from './data/technologies'

export default function App() {
  const [technologies, setTechnologies] = useState(null)
  const [loading, setLoading] = useState(true)
  const [stack, setStack] = useState([])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setTechnologies(TECHNOLOGIES)
      setLoading(false)
    }, 300)
  }, [])

  const handleAddToStack = (tech) => {
    if (stack.some((item) => item.id === tech.id)) {
      toast.warning(`${tech.name} is already in your stack!`, {
        position: 'top-right',
        autoClose: 3000,
        theme: 'dark',
      })
      return
    }
    setStack([...stack, tech])
    toast.success(`${tech.name} added to your stack!`, {
      position: 'top-right',
      autoClose: 2000,
      theme: 'dark',
    })
  }

  const handleRemoveFromStack = (id) => {
    const item = stack.find((t) => t.id === id)
    setStack(stack.filter((t) => t.id !== id))
    toast.info(`${item?.name || 'Item'} removed from stack`, {
      position: 'top-right',
      autoClose: 2000,
      theme: 'dark',
    })
  }

  const handleRemoveAll = () => {
    const count = stack.length
    setStack([])
    toast.info(`${count} items cleared from your stack`, {
      position: 'top-right',
      autoClose: 2000,
      theme: 'dark',
    })
  }

  return (
    <div className="min-h-screen bg-[#0f0f14] text-white">
      <ToastContainer />
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      <main>
        <Hero />

        <section id="projects" className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-2">
              <div className="h-px flex-1 bg-white/5"></div>
              <span className="text-gray-600 text-sm font-medium uppercase tracking-widest">Browse & Build</span>
              <div className="h-px flex-1 bg-white/5"></div>
            </div>
            <h2 className="text-center text-gray-500 text-lg mt-4">
              Click &quot;Add to Stack&quot; on any technology to assemble your perfect development stack
            </h2>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Technology Grid */}
            <div className="lg:col-span-3">
              <TechnologiesSection
                technologies={loading ? null : technologies}
                stack={stack}
                onAddToStack={handleAddToStack}
                onRemoveFromStack={handleRemoveFromStack}
              />
            </div>

            {/* Your Stack Sidebar */}
            <div className="lg:col-span-1">
              <YourStack
                stack={stack}
                onRemove={handleRemoveFromStack}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to <span className="gradient-text">Build Something Great?</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Start curating your ideal tech stack today and turn your project vision
              into reality with the right tools for the job.
            </p>
            <button className="btn-gradient text-white font-semibold px-10 py-4 rounded-full text-base hover:opacity-90 transition-opacity inline-flex items-center gap-2">
              Get Started Free
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
