import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Model from './components/Model'
import { Analytics } from '@vercel/analytics/react';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
      <Analytics />
    </main>
  )
}

export default App
