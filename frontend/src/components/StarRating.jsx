import React from 'react'
import { assets } from '../assets/assets'

const StarRating = ({ rating = 4 }) => {
  return (
    <>
      {Array(5)
        .fill('')
        .map((_, index) => (
          <img
            key={index} // ✅ Add key to each item in map
            src={rating > index ? assets.starIconFilled : assets.starIconOutlined}
            alt="star" // ✅ Always include alt for accessibility
            className="w-4.5 h-4.5"
          />
        ))}
    </>
  )
}

export default StarRating
