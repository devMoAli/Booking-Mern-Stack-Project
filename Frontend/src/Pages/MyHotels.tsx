import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import * as apiClient from "../api-client";
import { BsBuilding, BsMap } from "react-icons/bs";
import { BiHotel, BiMoney, BiStar } from "react-icons/bi";
import React from "react";

const MyHotels = () => {
  const { data: hotelData } = useQuery(
    "fetchMyHotels",
    apiClient.fetchMyHotels,
    {
      onError: () => {},
    }
  );

  if (!hotelData) {
    return <span>No Hotels found</span>;
  }

  return (
    <div className="space-y-5">
      <span className="flex justify-between">
        <h1 className="text-3xl font-bold">My Hotels</h1>
        <Link
          to="/add-hotel"
          className="flex bg-indigo-700 rounded text-white text-sm font-bold p-2 hover:bg-blue-500"
        >
          <span className="text-green-300 mr-2 font-bold"> + </span> Add Hotel
        </Link>
      </span>
      <div className="grid grid-cols-1 gap-8">
        {hotelData.map((hotel) => (
          <div
            data-testid="hotel-card"
            className="flex flex-col justify-between border border-slate-300 rounded-lg p-6 gap-4"
          >
            <h2 className="text-2xl text-orange-400 font-bold ">
              {hotel.name}
            </h2>
            <div className="whitespace-pre-line">{hotel.description}</div>
            <div className="grid grid-cols-5 gap-2">
              <div className="border border-slate-300 rounded p-3 text-sm flex items-center justify-center">
                <BsMap className="mr-1 items-center text-blue-500" />
                {hotel.city}, {hotel.country}
              </div>
              <div className="border border-slate-300 rounded p-3 text-sm flex items-center justify-center">
                <BsBuilding className="mr-1 text-orange-400" />
                {hotel.type}
              </div>
              <div className="border border-slate-300 rounded p-3 text-sm flex items-center justify-center">
                <BiMoney className="mr-1 text-green-500" />£
                {hotel.pricePerNight} per night
              </div>
              <div className="border border-slate-300 rounded p-3 text-sm flex items-center justify-center">
                <BiHotel className="mr-1 text-pink-500" />
                {hotel.adultCount} adults, {hotel.childCount} children
              </div>
              <div className="border border-slate-300 rounded text-sm p-3 flex items-center justify-center">
                <BiStar className="mr-1 text-yellow-500" />
                {hotel.starRating} Star Rating
              </div>
            </div>
            <span className="flex justify-end">
              <Link
                to={`/edit-hotel/${hotel._id}`}
                className="flex bg-indigo-300 rounded text-white text-sm font-bold p-2 hover:bg-orange-400"
              >
                View Details
              </Link>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyHotels;
