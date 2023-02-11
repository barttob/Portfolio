import React from 'react'

import '../styles/Work.css'

import ImageSlider from '../subComponents/ImageSlider'

import { MusicData, WorkData } from '../data/WorkData'


const Work = () => {
  return (
    <div className='work' id='work'>
      <ImageSlider title='Music' slides={MusicData} />
      <ImageSlider title='Programming' slides={WorkData} />
    </div>
  )
}

export default Work