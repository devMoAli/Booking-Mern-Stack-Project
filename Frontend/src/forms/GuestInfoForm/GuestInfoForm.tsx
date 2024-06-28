import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { useSearchContext } from "../../Context/SearchContext";
import { useAppContext } from "../../Context/AppContext";
import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
import { BiMoney } from "react-icons/bi";

type Props = {
  hotelId: string;
  pricePerNight: number;
};

type GuestInfoFormData = {
  checkIn: Date;
  checkOut: Date;
  adultCount: number;
  childCount: number;
};

const GuestInfoForm = ({ hotelId, pricePerNight }: Props) => {
  const search = useSearchContext();
  const { isLoggedIn } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation();

  const {
    watch,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<GuestInfoFormData>({
    defaultValues: {
      checkIn: search.checkIn,
      checkOut: search.checkOut,
      adultCount: search.adultCount,
      childCount: search.childCount,
    },
  });

  const checkIn = watch("checkIn");
  const checkOut = watch("checkOut");

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);

  const onSignInClick = (data: GuestInfoFormData) => {
    search.saveSearchValues(
      "",
      data.checkIn,
      data.checkOut,
      data.adultCount,
      data.childCount
    );
    navigate("/sign-in", { state: { from: location } });
  };

  const onSubmit = (data: GuestInfoFormData) => {
    search.saveSearchValues(
      "",
      data.checkIn,
      data.checkOut,
      data.adultCount,
      data.childCount
    );
    navigate(`/hotel/${hotelId}/booking`);
  };

  return (
    <div className="flex flex-col p-4 border border-slate-300 bg-slate-200 gap-4 rounded">
      <h3 className="text-md text-blue-900 font-bold flex items-center">
        <BiMoney className="mr-1 text-green-500" />£{pricePerNight}{" "}
        <span className="text-gray-400 ml-2 font-normal font-nunito">
          Per Night
        </span>
      </h3>
      <form
        onSubmit={
          isLoggedIn ? handleSubmit(onSubmit) : handleSubmit(onSignInClick)
        }
      >
        <div className="grid grid-cols-1 gap-4 items-center rounded">
          <div className="relative">
            <DatePicker
              required
              selected={checkIn}
              onChange={(date) => setValue("checkIn", date as Date)}
              selectsStart
              startDate={checkIn}
              endDate={checkOut}
              minDate={minDate}
              maxDate={maxDate}
              placeholderText="Check-in Date"
              className="min-w-full bg-white p-2 focus:outline-none rounded cursor-pointer text-gray-500 "
              wrapperClassName="min-w-full"
            />
            <label className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm pointer-events-none">
              Check-in Date
            </label>
          </div>

          <div className="relative">
            <DatePicker
              required
              selected={checkOut}
              onChange={(date) => setValue("checkOut", date as Date)}
              selectsStart
              startDate={checkIn}
              endDate={checkOut}
              minDate={minDate}
              maxDate={maxDate}
              placeholderText="Check-out Date"
              className="min-w-full bg-white p-2 focus:outline-none text-gray-500 rounded cursor-pointer"
              wrapperClassName="min-w-full"
            />
            <label className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm pointer-events-none">
              Check-out Date
            </label>
          </div>
          <div className="flex bg-white px-2 py-1 gap-2 rounded">
            <label className="items-center flex text-gray-500">
              Adults:
              <input
                className="w-full p-1 focus:outline-none font-bold text-orange-500"
                type="number"
                min={1}
                max={20}
                {...register("adultCount", {
                  required: "This field is required",
                  min: {
                    value: 1,
                    message: "There must be at least one adult",
                  },
                  valueAsNumber: true,
                })}
              />
            </label>
            <label className="items-center flex text-gray-500">
              Children:
              <input
                className="w-full p-1 focus:outline-none font-bold text-orange-500"
                type="number"
                min={0}
                max={20}
                {...register("childCount", {
                  valueAsNumber: true,
                })}
              />
            </label>
            {errors.adultCount && (
              <span className="text-red-500 font-semibold text-sm">
                {errors.adultCount.message}
              </span>
            )}
          </div>
          {isLoggedIn ? (
            <button className="bg-indigo-700 rounded text-white h-full p-2 font-bold hover:bg-blue-500 font-nunito text-lg">
              Book Now
            </button>
          ) : (
            <button className="bg-indigo-700 rounded text-white h-full p-2 font-bold hover:bg-blue-500 font-nunito text-lg">
              Sign in to Book
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default GuestInfoForm;
