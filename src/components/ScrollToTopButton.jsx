import React, { useState, useEffect } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) setShowButton(true);
      else setShowButton(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed z-50 bottom-4 right-4 md:bottom-8 md:right-8 p-2 md:p-3 bg-green-600 text-white rounded-full shadow-lg transition-opacity duration-300 ${
        showButton ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <ArrowUpIcon className="h-5 w-5 md:h-6 md:w-6" />
    </button>
  );
}

export default ScrollToTopButton;
