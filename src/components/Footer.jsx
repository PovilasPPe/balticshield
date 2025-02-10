import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#1076c9] to-[#21ad52] text-white py-6">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} BALTIC SHIELD. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
