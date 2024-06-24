import { useForm } from "react-hook-form";
import avatar from "../assets/avatar.png";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";

export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};
const Register = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { showToast } = useAppContext();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const mutation = useMutation(apiClient.register, {
    onSuccess: async () => {
      showToast({ message: "Registration Success!", type: "SUCCESS" });
      await queryClient.invalidateQueries("validateToken");
      navigate("/");
    },
    onError: (error: Error) => {
      // console.log(error.message);
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const onSubmit = handleSubmit((data) => {
    // console.log("Form Data:", data);
    mutation.mutate(data);
  });
  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmit}>
      <h2 className="text-3xl font-bold text-indigo-700 flex items-center">
        Create Account
        <img src={avatar} alt="avatar" className="w-20 h-20 ml-4" />
      </h2>
      <div className="flex flex-col md:flex-row gap-5">
        <label className="text-gray-400 text-sm font-bold flex-1">
          First Name
          <input
            className="border border-gray-300 rounded w-full py-1 px-2 font-normal"
            {...register("firstName", { required: "First Name is required" })}
          ></input>
          {errors.firstName && (
            <span className="text-red-400 font-normal">
              {errors.firstName.message}
            </span>
          )}
        </label>
        <label className="text-gray-400 text-sm font-bold flex-1">
          Last Name
          <input
            className="border border-gray-300 rounded w-full py-1 px-2 font-normal"
            {...register("lastName", { required: "Last Name is required" })}
          ></input>
          {errors.lastName && (
            <span className="text-red-400 font-normal">
              {errors.lastName.message}
            </span>
          )}
        </label>
      </div>
      <label className="text-gray-400 text-sm font-bold flex-1">
        Email
        <input
          type="email"
          className="border border-gray-300 rounded w-full py-1 px-2 font-normal"
          {...register("email", { required: "Email is required" })}
        ></input>
        {errors.email && (
          <span className="text-red-400 font-normal">
            {errors.email.message}
          </span>
        )}
      </label>

      <label className="text-gray-400 text-sm font-bold flex-1">
        Password
        <input
          type="password"
          className="border border-gray-300 rounded w-full py-1 px-2 font-normal"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 Characters",
            },
          })}
        ></input>
        {errors.password && (
          <span className="text-red-400 font-normal">
            {errors.password.message}
          </span>
        )}
      </label>

      <label className="text-gray-400 text-sm font-bold flex-1">
        Confirm Password
        <input
          type="password"
          className="border border-gray-300 rounded w-full py-1 px-2 font-normal"
          {...register("confirmPassword", {
            validate: (val) => {
              if (!val) {
                return "Password Confirmation is required";
              } else if (watch("password") !== val) {
                return "Your passwords do no match";
              }
            },
          })}
        ></input>
        {errors.confirmPassword && (
          <span className="text-red-400 font-normal">
            {errors.confirmPassword.message}
          </span>
        )}
      </label>
      <span>
        <button
          type="submit"
          className="bg-indigo-700 text-white mt-3 py-2 px-3 rounded hover:bg-indigo-600"
        >
          Register
        </button>
      </span>
    </form>
  );
};
export default Register;
