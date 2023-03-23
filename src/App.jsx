import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Blog,Features,Footer,Header,Possibility,WhatGPT3} from './containers'
import {CTA,Brand,Navbar} from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='gradient_bg'>
    <Navbar/>
    <Header/>
    </div>
    <Brand/>
    <WhatGPT3/>
    <Features/>
    <Possibility/>
    <CTA/>
    <Blog/>
    <Footer/>
    </div>
  )
}

export default App
