import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";
import React from "react";

type DetailsSectionProps = {
  isEdit: boolean;
};
const DetailsSection = ({ isEdit }: DetailsSectionProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div className="flex flex-col gap-4 ">
      <h1 className="text-3xl font-bold mb-3 text-orange-500">
        {isEdit ? "Edit Hotel 🏨" : "Add Hotel 🏨"}
      </h1>
      <div className="border border-gray-300 p-3 rounded">
        <h4 className="font-bold mb-2 text-gray-400 underline underline-offset-4 font-nunito">
          Hotel Details
        </h4>
        <label className="text-blue-900 text-sm font-bold flex-1">
          Name
          <input
            type="text"
            className="border text-gray-500 border-gray-300 rounded w-full py-1 px-2 font-normal"
            {...register("name", { required: "This field is required" })}
          ></input>
          {errors.name && (
            <span className="text-red-500 ml-0.5 font-normal">
              {errors.name.message}
            </span>
          )}
        </label>

        <div className="flex gap-4 mb-2">
          <label className="text-blue-900 text-sm font-bold flex-1">
            City
            <input
              type="text"
              className="border text-gray-500 border-gray-300 rounded w-full py-1 px-2 font-normal"
              {...register("city", { required: "This field is required" })}
            ></input>
            {errors.city && (
              <span className="text-red-500 ml-0.5 font-normal">
                {errors.city.message}
              </span>
            )}
          </label>
          <label className="text-blue-900 text-sm font-bold flex-1">
            Country
            <input
              type="text"
              className="border text-gray-500 border-gray-300 rounded w-full py-1 px-2 font-normal"
              {...register("country", { required: "This field is required" })}
            ></input>
            {errors.country && (
              <span className="text-red-500 ml-0.5  font-normal">
                {errors.country.message}
              </span>
            )}
          </label>
        </div>
        <div>
          <label className="text-blue-900 text-sm font-bold flex-1">
            Description
            <textarea
              rows={10}
              className="border rounded text-gray-500 border-gray-300 w-full py-1 px-2 font-normal"
              {...register("description", {
                required: "This field is required",
              })}
            ></textarea>
            {errors.description && (
              <span className="text-red-500  ml-0.5 font-normal">
                {errors.description.message}
              </span>
            )}
          </label>
        </div>
        <div>
          <label className="text-blue-900 text-sm font-bold max-w-[50%] mb-4">
            Price Per Night
            <input
              type="number"
              min={1}
              className="border rounded border-gray-300 text-gray-500 w-full py-1 px-2 font-normal"
              {...register("pricePerNight", {
                required: "This field is required",
              })}
            ></input>
            {errors.pricePerNight && (
              <span className="text-red-500  ml-0.5 font-normal">
                {errors.pricePerNight.message}
              </span>
            )}
          </label>
        </div>
        <label className="text-blue-900 text-sm font-bold max-w-[50%]">
          Star Rating
          <select
            {...register("starRating", {
              required: "This field is required",
            })}
            className="border text-gray-500 rounded border-gray-300 w-full p-2 text-gray-700 font-normal"
          >
            <option value="" className="text-sm font-bold">
              Select as Rating
            </option>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          {errors.starRating && (
            <span className="text-red-500  ml-0.5 font-normal">
              {errors.starRating.message}
            </span>
          )}
        </label>
      </div>
    </div>
  );
};

export default DetailsSection;
