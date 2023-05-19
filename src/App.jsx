import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './tailwind.css'

function App() {
  return (
    <div className='min-h-screen divide-y-2 divide-solid dark:divide-slate-50 divide-gray-400'>
      <Navbar />
      <div
        className='font-inter 
        bg-slate-200 text-stone-900 
        dark:bg-gray-900 dark:text-stone-200 '
      >
        <div className='max-w-5xl w-11/12 mx-auto'>
          <Intro />
          <Portfolio />
          <Timeline />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
