import { useFormContext } from "react-hook-form";
import { hotelTypes } from "../../config/hotel-options-config";
import { HotelFormData } from "./ManageHotelForm";
import React from "react";

const TypeSection = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  const typeWatch = watch("type");

  return (
    <div className="border border-gray-300 rounded p-3">
      <h4 className=" font-bold mb-3 text-gray-400  ml-0.5 underline underline-offset-4 font-nunito">
        Hotel Type
      </h4>
      <div className="grid grid-cols-5 gap-2">
        {hotelTypes.map((type) => (
          <label
            key={type}
            className={
              typeWatch === type
                ? "cursor-pointer bg-blue-300 text-sm rounded-full px-4 py-2 font-semibold text-gray-600 text-center hover:text-indigo-700"
                : "cursor-pointer bg-gray-300 text-sm rounded-full px-4 py-2 font-semibold text-gray-600 text-center hover:text-indigo-700"
            }
          >
            <input
              type="radio"
              value={type}
              {...register("type", {
                required: "This field is required",
              })}
              className="hidden"
            />
            <span>{type}</span>
          </label>
        ))}
      </div>
      {errors.type && (
        <span className="text-red-500  ml-0.5 text-sm font-normal">
          {errors.type.message}
        </span>
      )}
    </div>
  );
};

export default TypeSection;
