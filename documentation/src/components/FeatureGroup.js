import React from 'react'
import Feature from './Feature'

const FeatureGroup = (props) => {
  return (
    <div>
    {props.features.map((feature) => {
        return (
            <Feature feature = {feature} />
        )
})} </div>
  )
}

export default FeatureGroup