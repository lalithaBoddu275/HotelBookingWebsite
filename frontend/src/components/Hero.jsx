import React, { useState } from 'react';
import { assets, cities } from '../assets/assets';
import { useAppContext } from '../context/AppContext';

const Hero = () => {
  const { axios, getToken, navigate, setSearchedCities } = useAppContext();
  const [destination, setDestination] = useState("");

  const onSearch = async (e) => {
    e.preventDefault();
    navigate(`/rooms?destination=${destination}`);

    // call api to save searched city
    await axios.post(
      'api/user/store-recent-search',
      { recentSearchedCity: destination },
      { headers: { Authorization: `Bearer ${await getToken()}` } }
    );

    // add destination to searched cities max 3
    setSearchedCities((prev) => {
      const updated = [...prev, destination];
      if (updated.length > 3) updated.shift();
      return updated;
    });
  };

  return (
    <div className="flex justify-center mt-40 px-4 md:px-8 lg:px-16">
      <form
        onSubmit={onSearch}
        className="bg-white text-gray-500 rounded-lg px-6 py-4 flex flex-col md:flex-row items-center gap-4 w-full max-w-4xl shadow-md border border-gray-300"
      >
        {/* Destination */}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <img src={assets.calenderIcon} alt="" className="h-4" />
            <label htmlFor="destinationInput">Destination</label>
          </div>
          <input
            onChange={(e) => setDestination(e.target.value)}
            list="destinations"
            id="destinationInput"
            type="text"
            className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm w-full outline-none"
            placeholder="Type here"
            required
          />
          <datalist id="destinations">
            {cities.map((city, index) => (
              <option value={city} key={index} />
            ))}
          </datalist>
        </div>

        {/* Check In */}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <img src={assets.calenderIcon} alt="" className="h-4" />
            <label htmlFor="checkIn">Check in</label>
          </div>
          <input
            id="checkIn"
            type="date"
            className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm w-full outline-none"
          />
        </div>

        {/* Check Out */}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <img src={assets.calenderIcon} alt="" className="h-4" />
            <label htmlFor="checkOut">Check out</label>
          </div>
          <input
            id="checkOut"
            type="date"
            className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm w-full outline-none"
          />
        </div>

        {/* Guests */}
        <div className="flex flex-col md:flex-col items-center md:items-start flex-1">
          <label htmlFor="guests">Guests</label>
          <input
            min={1}
            max={4}
            id="guests"
            type="number"
            className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm w-full max-w-[80px] outline-none"
            placeholder="0"
          />
        </div>

        {/* Submit Button */}
        <button className="flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white cursor-pointer w-full md:w-auto mt-2 md:mt-0">
          <img src={assets.searchIcon} alt="" className="h-7" />
          <span>Check Availability</span>
        </button>
      </form>
    </div>
  );
};

export default Hero;
