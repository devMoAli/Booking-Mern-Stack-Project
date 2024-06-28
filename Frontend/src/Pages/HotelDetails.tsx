import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import * as apiClient from "../api-client";
import { AiFillStar } from "react-icons/ai";
import GuestInfoForm from "../forms/GuestInfoForm/GuestInfoForm";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./hotelDetails.css";

const HotelDetails: React.FC = () => {
  const { hotelId } = useParams<{ hotelId: string }>();

  const { data: hotel } = useQuery(
    ["fetchHotelById", hotelId],
    () => apiClient.fetchHotelById(hotelId || ""),
    {
      enabled: !!hotelId,
    }
  );

  if (!hotel) {
    return <></>;
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
  };

  return (
    <div className="space-y-1">
      <div>
        <h1 className="text-2xl font-bold text-indigo-800">{hotel.name}</h1>
        <span className="flex">
          {Array.from({ length: hotel.starRating }).map((_, index) => (
            <AiFillStar key={index} className="fill-yellow-400" />
          ))}
        </span>
      </div>

      <div className="slider-container">
        <Slider {...sliderSettings}>
          {hotel.imageUrls.map((image, index) => (
            <div key={index} className="slide h-[300px]">
              <img
                src={image}
                alt={hotel.name}
                className=" w-full h-full rounded object-cover object-center"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-6 gap-2">
        <h2 className="text-lg font-bold text-indigo-700 col-span-full mb-2 font-nunito">
          {hotel.name} Facilities
        </h2>
        {hotel.facilities.map((facility, index) => (
          <div
            key={index}
            className="border border-slate-300 text-sm text-gray-600 bg-slate-200 rounded p-1 flex justify-center items-center"
          >
            {facility}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr]">
        <div className="whitespace-pre-line bg-gray-100 rounded-lg mt-4">
          <h2 className="text-lg font-bold text-indigo-700 mb-2 font-nunito">
            About {hotel.name}
          </h2>
          <p className="text-gray-700">{hotel.description}</p>
        </div>
        <div className="pl-4 mt-14 rounded">
          <GuestInfoForm
            pricePerNight={hotel.pricePerNight}
            hotelId={hotel._id}
          />
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
