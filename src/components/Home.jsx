import React from 'react'

import '../styles/Home.css'

const Home = () => {
  return (
    <div className='home' id='home'>
        <div className='home__text'>
          <div className='home__text--title'>
            BARTEK<br />TOBIA<span>SZ</span>
          </div>
          <div className='home__text--subtitle'>Music composer,<br />Producer</div>
        </div>
        <div className='home__img'>
          <img src='LPKameleon.svg' alt='home' />
        </div>
    </div>
  )
}

export default Home