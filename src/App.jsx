import React from 'react'
import { useEffect, useState } from "react";

import './App.css'

import Menu from './components/Menu'
import Home from './components/Home'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {  

  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className='app__container'>
      <Menu scrollPosition={scrollTop}/>
      <Home />
      <About />
      <Work />
      <Contact />
    </div>
  )
}

export default App
