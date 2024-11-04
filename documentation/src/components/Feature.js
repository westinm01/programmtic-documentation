import React from 'react'
import ReactPlayer from 'react-player'
import './Feature.css'

const videoWidth = 800
export const Feature = ({feature}) => {
  
  return (
    <div className = "feature" id = {feature.featureID ? feature.featureID : "null-feature"}>
        <p className = "feature-header">{feature.featureName ? feature.featureName : "null"}</p>
        <div className = "feature-video-container">
          {feature.featureVideoPath? <ReactPlayer className = "feature-video" url = {`${process.env.PUBLIC_URL}` + feature.featureVideoPath} loop = {true} playing = {true} controls = {true} muted = {true} width = {videoWidth} height = {videoWidth * 9/16}/>
        : <></>}
        </div>
        
        <p className = "feature-description">{feature.featureDescription}</p>
    </div>

  )
}

export default Feature