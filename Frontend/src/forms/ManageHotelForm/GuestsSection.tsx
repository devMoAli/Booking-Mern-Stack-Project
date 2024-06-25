import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";
import React from "react";

const GuestsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div className="border border-gray-300 p-3 rounded">
      <h4 className="text-gray-400 underline underline-offset-4 font-nunito  font-bold mb-3">
        Guests
      </h4>
      <div className="grid grid-cols-2 p-6 gap-5 rounded bg-gray-300">
        <label className="text-gray-500 text-sm font-semibold">
          Adults
          <input
            className="border rounded w-full py-2 px-3 font-normal"
            type="number"
            min={1}
            {...register("adultCount", {
              required: "This field is required",
            })}
          />
          {errors.adultCount?.message && (
            <span className="text-red-500 text-sm ml-0.5 font-normal">
              {errors.adultCount?.message}
            </span>
          )}
        </label>
        <label className="text-gray-500 text-sm font-semibold">
          Children
          <input
            className="border rounded w-full py-2 px-3 font-normal"
            type="number"
            min={0}
            {...register("childCount", {
              required: "This field is required",
            })}
          />
          {errors.childCount?.message && (
            <span className="text-red-500  ml-0.5 text-sm font-normal">
              {errors.childCount?.message}
            </span>
          )}
        </label>
      </div>
    </div>
  );
};

export default GuestsSection;
