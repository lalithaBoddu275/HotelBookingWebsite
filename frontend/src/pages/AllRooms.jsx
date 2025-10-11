import React from 'react';
import { roomsDummyData, assets, facilityIcons } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import StarRating from '../components/StarRating';
const CheckBox = ({label, selected=false, onchange=() => {}}) =>{
    return(
      <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
        <input type="checkbox" checked={selected} onChange={(e)=>onchange(e.target.checked, label)} />
        <span className='font-light select-none'>{label}</span>
      </label>
    )
  } 
  const RadioButton = ({label, selected=false, onchange=() => {}}) =>{
    return(
      <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
        <input type="radio" name="sortOption" checked={selected} onChange={()=>onchange(label)} />
        <span className='font-light select-none'>{label}</span>
      </label>
    )
  } 
const AllRooms = () => {
  const navigate = useNavigate();
  const [openFilters,setOpenFilters]=useState(false);
  const roomTypes = [
    "Single Bed",
    "Double Bed",
    "Luxury Bed",
    "Family Suite",
  ];

  const priceRanges = [
    "0 to 500",
    "500 to 1000",
    "1000 to 2000",
    "2000 to 3000",
  ];

  const sortOptions = [
    "Price Low to High",
    "Price High to Low",
    "Newest First",
  ];

  const handleNavigate = (id) => {
    navigate(`/rooms/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32">
      <div className="w-full lg:w-3/4">
        <header className="mb-6">
          <h1 className="text-4xl font-bold">Hotel Rooms</h1>
          <p className="text-gray-600 mt-2">
            Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.
          </p>
        </header>

        <div className="flex flex-col gap-8">
          {roomsDummyData.map((room) => {
            const { _id, images, hotel } = room;
            const { name, city, address } = hotel;

            return (
              <div key={_id} className="flex flex-col md:flex-row gap-4">
                <img
                  onClick={() => handleNavigate(_id)}
                  
                  src={images[0]}
                  alt={`${name} image`}
                  title="View Room Details"
                  className="max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer"
                />
                <div className="md:w-1/2 flex flex-col gap-2">
                  <p className="text-gray-500">{city}</p>
                  <p
                    onClick={() => handleNavigate(_id)}
                    className="text-gray-800 text-3xl font-playfair cursor-pointer"
                  >
                    {name}
                  </p>
                  <div className="flex items-center">
                    <StarRating />
                    <p className="ml-2">200+ reviews</p>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 mt-2 text-sm">
                    <img src={assets.locationIcon} alt="location icon" className="w-4 h-4" />
                    <span>{address}</span>
                  </div>
                  {/*  room amenities*/}
                  <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                    {room.amenities.map((item,index)=>(
                        <div key={index} className='flex-items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]/70'>
                            <img src={facilityIcons[item]} alt={item}
                            /> 
                            <p className='text-xs'>{item}</p>                           
                            </div>
                    ))}
                  </div>
                  {/* room price per night */}
                 <p className='text-xl font-medium text-gray-700'>${room.pricePerNight}/night</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Filters Section Placeholder */}
      <div className='bg-white w-80 border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-16'>
            <div className={`flex items-center justify-between px-5 py-2.5 min-lg:border-b border-gray-300 ${openFilters && 'border-b'}`}>
              <p className='text-base font-medium text-gray-800'>FILTERS</p>
              <div className='text-xs cursor-pointer'>
                <span onClick={()=> setOpenFilters(!openFilters)} className='lg:hidden'>{openFilters ? 'HIDE' : 'SHOW'}</span>
                <span className='hidden lg:block'>CLEAR</span>
              </div>
            </div>

            <div className={`${openFilters ? 'h-auto' : 'h-0 lg:h-auto'} overflow-hidden transition-all duration-all duration-700`}>
              <div className='px-5 pt-5'>
                <p className='font-medium text-gray-800 pb-2'>Popular Filters</p>

                {roomTypes.map((room, index)=>(
                  <CheckBox key={index} label={room} selected={selectedFilters.roomType.includes(room)} onchange={(checked)=> handleFilterChange(checked, room, "roomType")}/>
                ))}
              </div>

                <div className='px-5 pt-5'>
                <p className='font-medium text-gray-800 pb-2'>Price Range</p>

                {priceRanges.map((range, index)=>(
                  <CheckBox key={index} label={`${currency} ${range}`} selected={selectedFilters.priceRange.includes(range)} onchange={(checked)=> handleFilterChange(checked, range, "priceRange")}/>
                ))}
              </div>

              <div className='px-5 pt-5 pb-7'>
                <p className='font-medium text-gray-800 pb-2'>Sort By</p>

                {sortOptions.map((option, index)=>(
                  <RadioButton key={index} label={option} selected={selectedSort === option} onchange={()=> handleSortChange(option)}/>
                ))}
              </div>
            </div>
    </div>
    </div>
  );
};

export default AllRooms;
