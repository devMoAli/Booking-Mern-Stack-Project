import React from "react";

const Hero = () => {
  const hotelImageUrl =
    "https://res.cloudinary.com/ds4msvjqo/image/upload/v1719481719/hotel2_10.34.03_AM_vvqvfb.jpg";
  const backgroundStyle: React.CSSProperties = {
    backgroundImage: `url(${hotelImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "300px",
    display: "flex",
    alignItems: "center",
    fontWeight: "bold",
  };
  return (
    <div className="container mx-auto flex flex-col gap-2">
      <div style={backgroundStyle}>
        <div className="bg-indigo-800 bg-opacity-50  p-8">
          <h2 className="text-3xl text-gray-300 font-bold mt-2">
            Find your next stay{" "}
          </h2>
          <p className="text-2xl text-gray-300 mt-2 font-nunito">
            Search low prices on hotels for your dream vacation⛱️
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
