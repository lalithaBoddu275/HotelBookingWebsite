import React from 'react';

const Search = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search submitted!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white text-gray-500 border border-gray-300 rounded-4xl px-4 py-2 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto "
    >
      {/* Destination */}
      <div>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C8 2 4 6 4 10c0 6 8 12 8 12s8-6 8-12c0-4-4-8-8-8z" />
          </svg>
          <label htmlFor="destinationInput">Destination</label>
        </div>
        <input
          list="destinations"
          id="destinationInput"
          type="text"
          className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
          placeholder="Type here"
          required
        />
        <datalist id="destinations">
          <option value="Hyderabad" />
          <option value="Bangalore" />
          <option value="Chennai" />
          <option value="Delhi" />
        </datalist>
      </div>

      {/* Check In */}
      <div>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeWidth="2" d="M3 8h18M3 16h18M7 4v4M17 4v4" />
          </svg>
          <label htmlFor="checkIn">Check in</label>
        </div>
        <input
          id="checkIn"
          type="date"
          className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
        />
      </div>

      {/* Check Out */}
      <div>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeWidth="2" d="M3 8h18M3 16h18M7 4v4M17 4v4" />
          </svg>
          <label htmlFor="checkOut">Check out</label>
        </div>
        <input
          id="checkOut"
          type="date"
          className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
        />
      </div>

      {/* Guests */}
      <div className="flex md:flex-col max-md:gap-2 max-md:items-center">
        <label htmlFor="guests">Guests</label>
        <input
          min={1}
          max={4}
          id="guests"
          type="number"
          className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none max-w-[4rem]"
          placeholder="0"
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1"
      >
        <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
        </svg>
        <span>Search</span>
      </button>
    </form>
  );
};

export default Search;
