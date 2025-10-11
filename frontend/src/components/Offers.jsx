import React from 'react'
import Title from './Title'
import { assets,exclusiveOffers } from '../assets/assets'

const Offers = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 py-16 bg-slate-50">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Left: Title */}
        <Title
          align="left"
          title="Exclusive Offers"
          subTitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories."
        />

        {/* Right: Button */}
        <button className="group flex items-center gap-2 mt-6 md:mt-0 text-pink-600 font-medium hover:underline">
          View All Offers
          <img
            src={assets.arrowIcon}
            alt="arrow-icon"
            className="w-4 h-4 group-hover:translate-x-1 transition-all"
          />
        </button>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {exclusiveOffers.map((item) => (
          <div
            key={item._id}
            className="group relative flex flex-col items-start justify-between gap-1 pt-12 md:pt-18 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            {/* Discount Badge */}
            <p className="px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full">
              {item.priceOff}% OFF
            </p>

            {/* Card Content */}
            <div>
              <p className="text-2xl font-medium font-playfair">{item.title}</p>
              <p>{item.description}</p>
              <p className="text-xs text-white/70 mt-3">Expires {item.expiryDate}</p>
            </div>

            {/* Button */}
            <button className="flex items-center gap-2 font-medium cursor-pointer mt-4 mb-5">
              View offers
              <img
                className="invert group-hover:translate-x-1 transition-all"
                src={assets.arrowIcon}
                alt="arrow-icon"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Offers
