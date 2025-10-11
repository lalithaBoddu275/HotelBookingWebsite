import React from 'react'
import { assets } from '../assets/assets'

const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {Array(5).fill('').map((_, index) => (
        <img 
          key={index}
          src={rating > index ? assets.starIconFilled : assets.starIconOutlined} 
          alt="star-icon" 
          className="w-[18px] h-[18px]"
        />
      ))}
    </div>
  )
}

export default StarRating
