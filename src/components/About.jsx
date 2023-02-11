import React from 'react'

import '../styles/About.css'

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='about__img'>
          <img src='LPKameleon.svg' alt='about' />
        </div>
        <div className='about__text'>
        In August 2018, I was diagnosed with cancer on my spine. The result of this, and as a consequence of several major neurosurgical operations, is paralysis, which I try to overcome with continuous, systematic rehabilitation. I exercise every day: with specialists and on my own. This is only possible thanks to the support of fantastic people - thank you.<br />
        I believe that cancer will not attack again. So the priority is rehabilitation. I combine it with studies and learning at a music school (piano). At the same time, I am learning to function independently so that I need the help of others as little as possible.
        </div>
        
    </div>
  )
}

export default About