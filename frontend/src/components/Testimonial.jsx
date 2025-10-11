import React from 'react'
import { testimonials } from '../assets/assets'
import StarRating from './StarRating'
import Title from './Title'

const Testimonial = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 pt-20 pb-32">
      <Title
        title="What Our Guests Say"
        subTitle="Discover why discerning travelers consistently choose QuickStay for their exclusive and luxurious accommodations around the world."
      />

      <div className="flex flex-wrap justify-center gap-6 mt-20">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-72 md:w-80"
          >
            {/* Top Section (Image + Name + Address) */}
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-full object-cover"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <p className="font-playfair text-xl font-semibold">
                  {testimonial.name}
                </p>
                <p className="text-gray-500 text-sm">{testimonial.address}</p>
              </div>
            </div>

            {/* Star Rating */}
            <div className="flex items-center gap-1 mt-4">
              <StarRating rating={testimonial.rating} />
            </div>

            {/* Review Text */}
            <p className="text-gray-600 mt-4 italic">
              "{testimonial.review}"
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial
