import { useFormContext } from "react-hook-form";
import { hotelFacilities } from "../../config/hotel-options-config";
import { HotelFormData } from "./ManageHotelForm";
import React from "react";

const FacilitiesSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div className="border border-gray-300 p-3 rounded">
      <h4 className="text-gray-400 underline underline-offset-4 font-nunito font-bold mb-3">
        Facilities
      </h4>
      <div className="grid grid-cols-5 gap-3">
        {hotelFacilities.map((facility) => (
          <label
            key={facility}
            className="text-sm flex gap-1 text-gray-700 cursor-pointer"
          >
            <input
              className="cursor-pointer"
              type="checkbox"
              value={facility}
              {...register("facilities", {
                validate: (facilities) => {
                  if (facilities && facilities.length > 0) {
                    return true;
                  } else {
                    return "At least one facility is required";
                  }
                },
              })}
            />
            {facility}
          </label>
        ))}
      </div>
      {errors.facilities && (
        <span className="text-red-500  ml-0.5 text-sm font-normal">
          {errors.facilities.message}
        </span>
      )}
    </div>
  );
};

export default FacilitiesSection;
