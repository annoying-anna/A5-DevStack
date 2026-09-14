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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [stack, setStack] = useState([])

  useEffect(() => {
    const saved = localStorage.getItem('devstack-selection')
    if (saved) {
      try {
        setStack(JSON.parse(saved))
      } catch {
        setStack([])
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('devstack-selection', JSON.stringify(stack))
  }, [stack])

  const addToStack = (tech) => {
    if (stack.some((item) => item.id === tech.id)) return
    setStack((prev) => [...prev, tech])
    toast.success(`${tech.name} added to your stack!`, {
      position: 'bottom-right',
      autoClose: 2000,
      theme: 'dark',
    })
  }

  const removeFromStack = (techId) => {
    const removed = stack.find((item) => item.id === techId)
    setStack((prev) => prev.filter((item) => item.id !== techId))
    if (removed) {
      toast.info(`${removed.name} removed from your stack`, {
        position: 'bottom-right',
        autoClose: 2000,
        theme: 'dark',
      })
    }
  }

  const removeAll = () => {
    setStack([])
    toast.info('Stack cleared', {
      position: 'bottom-right',
      autoClose: 2000,
      theme: 'dark',
    })
  }

  return (
    <div className="min-h-screen bg-[#0f0f14]">
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <Hero />

        <div className="grid lg:grid-cols-[1fr_320px] gap-8 py-12">
          <TechnologiesSection
            technologies={TECHNOLOGIES}
            stack={stack}
            onAddToStack={addToStack}
            onRemoveFromStack={removeFromStack}
          />
          <aside className="hidden lg:block">
            <YourStack stack={stack} onRemove={removeFromStack} onRemoveAll={removeAll} />
          </aside>
        </div>

        <div className="lg:hidden pb-20">
          <YourStack stack={stack} onRemove={removeFromStack} onRemoveAll={removeAll} />
        </div>
      </main>

      <Footer />
      <ToastContainer />
    </div>
  )
}
