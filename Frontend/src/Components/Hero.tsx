import React from "react";

const Hero = () => {
  const hotelImageUrl =
    "https://res.cloudinary.com/ds4msvjqo/image/upload/v1719481719/hotel2_10.34.03_AM_vvqvfb.jpg";
  const backgroundStyle: React.CSSProperties = {
    backgroundImage: `url(${hotelImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "400px",
    display: "flex",
    alignItems: "center",
    fontWeight: "bold",
  };
  return (
    <div className="container mx-auto flex flex-col gap-2">
      <div style={backgroundStyle}>
        <div className="bg-gray-500 bg-opacity-50  p-8">
          <h2 className="font-raleway text-white my-2 text-4xl ">
            The perfect home base
          </h2>
          <h2 className="font-raleway text-white font-bold my-2 text-4xl">
            for your your next special stay
          </h2>
          <p className="text-xl font-montserrat text-indigo-800 mt-3">
            Search low prices on hotels for your dream vacation⛱️
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
