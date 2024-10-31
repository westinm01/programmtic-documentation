import React from 'react'
import ReactPlayer from 'react-player'
import './Feature.css'

const Feature = (props) => {
  return (
    <div className = "feature">
        <p className = "feature-header">Zoom 2</p>
        <div className = "feature-video-container">
        <ReactPlayer className = "feature-video" url = {`${process.env.PUBLIC_URL}/Videos/Zoom2.mov`} controls ={true} />
        </div>
        
        <p className = "feature-description">This Zoom will draw a square box where you want to zoom towards. Then, the rest of the plot and axes fade. The box and the plot it contains are scaled up, and once done, the new axes appear. A magnifying glass is also displayed at the top-left, along with the zoom scale.</p>
    </div>

  )
}

export default Feature