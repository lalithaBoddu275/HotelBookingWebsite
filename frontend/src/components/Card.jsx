import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Card = ({ room, index }) => {
  return (
    <Link    className="w-full rounded-xl overflow-hidden bg-white shadow-[0px_4px_rgba(0,0,0,0.05)] block "  to={`/rooms/${room._id}`} onClick={() => scrollTo(0, 0)} >
      {/* Image with badge */}
      <div className="relative">
        <img 
          src={room.images[0]} 
          alt={room.hotel.name} 
        
        />
        {index % 2 === 0 && (
          <p className="px-3 py-1 absolute top-3 left-3 text-xs bg-white rounded-md shadow-sm">
            Best Seller
          </p>
        )}
      </div>

      {/* Content */}
      <div className="p-4 pt-5">
        <div className="flex items-center justify-between">
          <p className="font-playfair text-xl font-medium text-gray-800">{room.hotel.name}</p>
          <div className="flex items-center gap-1 text-sm">
            <img src={assets.starIconFilled} alt="rating" className="w-4 h-4" /> 4.5
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 mt-2 text-gray-600 text-sm">
          <img src={assets.locationIcon} alt="location" className="w-4 h-4" />
          <span>{room.hotel.address}</span>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between mt-4">
          <p>
            <span className="text-xl text-gray-800">${room.pricePerNight}/night</span>
          </p>
          <button className="px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all cursor-pointer">
            Book Now
          </button>
        </div>
      </div>
    </Link>
  )
}

export default Card