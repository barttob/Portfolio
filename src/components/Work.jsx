import React from 'react'

import '../styles/Work.css'

import ImageSlider from '../subComponents/ImageSlider'

import { MusicData } from '../data/WorkData'


const Work = () => {
  return (
    <div className='work' id='work'>
      <ImageSlider title='Music' slides={MusicData} />
      <ImageSlider title='Programming' slides={MusicData} />
    </div>
  )
}

export default Work