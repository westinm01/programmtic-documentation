import React from 'react'
import {Feature} from './Feature'
import {FeatureData} from './FeatureData'
const FeatureGroup = () => {
  return (
    <div>
    {FeatureData.map((feature) => {
        console.log(feature)
        return (
            
            <Feature feature = {feature}/>
        )
})} </div>
  )
}

export default FeatureGroup