import { useForm } from "react-hook-form";
import avatar from "../assets/avatar.png";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../Context/AppContext";
import { Link, useNavigate } from "react-router-dom";

export type SignInFormData = {
  email: string;
  password: string;
};

const SignIn = () => {
  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormData>();

  const mutation = useMutation(apiClient.signIn, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
      navigate("/");
    },
    onError: (error: Error) => {
      showToast({
        message: error.message,
        type: "ERROR",
      });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmit}>
      <h2 className="text-3xl font-bold text-indigo-700 flex items-center">
        Sign In
        <img src={avatar} alt="avatar" className="w-20 h-20 ml-4" />
      </h2>
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
      <span className="flex items-center justify-between">
        <span className="text-sm text-gray-500">
          Not Registered?{" "}
          <Link to="/register">
            <span className="text-indigo-700 underline">Create an Account</span>
          </Link>
        </span>
        <button
          type="submit"
          className="bg-indigo-700 text-white mt-3 py-2 px-3 rounded hover:bg-indigo-600"
        >
          Login
        </button>
      </span>
    </form>
  );
};

export default SignIn;
