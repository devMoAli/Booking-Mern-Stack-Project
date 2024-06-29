import React from "react";
import { HotelType } from "../../../Backend/src/shared/types";

type Props = {
  checkIn: Date;
  checkOut: Date;
  adultCount: number;
  childCount: number;
  numberOfNights: number;
  hotel: HotelType;
};

const BookingDetailsSummary = ({
  checkIn,
  checkOut,
  adultCount,
  childCount,
  numberOfNights,
  hotel,
}: Props) => {
  return (
    <div className="grid gap-4 rounded-lg border border-slate-300 p-5 h-fit font-nunito">
      <h2 className="text-xl font-bold text-orange-400">Your Booking Details 🔖</h2>
      <div className="border-b py-2 text-gray-500">
        Location:
        <div className="font-bold text-indigo-800">{`${hotel.name}, ${hotel.city}, ${hotel.country}`}</div>
      </div>
      <div className="flex justify-between">
      <div className="text-gray-500">
          Check-in
          <div className="font-bold text-green-800"> {checkIn.toDateString()}</div>
        </div>
        <div className="text-gray-500">
          Check-out
          <div className="font-bold text-green-800"> {checkOut.toDateString()}</div>
        </div>
      </div>
      <div className="border-t border-b py-2 text-gray-500">
        Total length of stay:
        <div className="font-bold text-green-800">{numberOfNights} nights</div>
      </div>

      <div className="text-gray-500">
        Guests{" "}
        <div className="font-bold text-green-800">
          {adultCount} adults - {childCount} children
        </div>
      </div>
    </div>
  );
};

export default BookingDetailsSummary;
