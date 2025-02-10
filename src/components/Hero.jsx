import React from "react";

function Hero() {
  return (
    <div className="bg-white pb-20 text-center">
      {/* Logo at ~25rem tall */}
      <img
        src="/images/logo-baltic-shield.png"
        alt="Baltic Shield Logo"
        className="mx-auto mb-8 h-[25rem] w-auto"
      />

      {/* Headline & Subheadline with primary colors */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-green-600">
        Empowering Online Privacy Across the Globe
      </h1>
      <p className="text-base sm:text-lg mb-6 max-w-2xl mx-auto text-blue-600">
        Connecting millions with secure and reliable VPN services.
      </p>

      {/* Button in green with a blue hover */}
      <a
        href="#goals"
        className="
          bg-green-600 text-white py-3 px-8 rounded-full shadow-lg
          hover:bg-blue-600 transition-colors duration-200
          text-sm sm:text-base
        "
      >
        Explore Our Goals
      </a>
    </div>
  );
}

export default Hero;
