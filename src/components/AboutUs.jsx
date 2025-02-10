import React from "react";
import {
  UsersIcon,
  FlagIcon,
  ShieldCheckIcon,
  LightBulbIcon,
} from "@heroicons/react/24/solid";

function AboutUs() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-green-600 text-center mb-8">
          About Us
        </h2>
        {/* 
          text-center on mobile; revert to text-left on sm: or md: breakpoints if desired.
          e.g., 'sm:text-left' or 'md:text-left'
        */}
        <div className="grid grid-cols-1 gap-8 text-gray-700 text-lg text-center sm:text-left">
          <div>
            <div className="flex items-center justify-center sm:justify-start space-x-2 mb-2">
              <UsersIcon className="h-6 w-6 text-green-600" />
              <h3 className="text-2xl font-semibold text-green-600">
                Who We Are
              </h3>
            </div>
            <p>
              BALTIC SHIELD strives to build a safer digital future for
              everyone. Our mission is rooted in empowering users with advanced
              tools to protect their online freedom, privacy, and security.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center sm:justify-start space-x-2 mb-2">
              <FlagIcon className="h-6 w-6 text-green-600" />
              <h3 className="text-2xl font-semibold text-green-600">
                Our Mission
              </h3>
            </div>
            <p>
              We are dedicated to providing cutting-edge solutions that
              safeguard your personal data, protect your privacy, and secure
              your online activities. In an age of increasing cyber risks, we
              are your shield against digital threats.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center sm:justify-start space-x-2 mb-2">
              <ShieldCheckIcon className="h-6 w-6 text-green-600" />
              <h3 className="text-2xl font-semibold text-green-600">
                What We Stand For
              </h3>
            </div>
            <ul className="list-disc list-inside ml-0 sm:ml-4">
              <li>
                <strong>Privacy First:</strong> Your data is yours alone.
              </li>
              <li>
                <strong>Uncompromised Security:</strong> Advanced encryption and
                robust solutions.
              </li>
              <li>
                <strong>Ease of Use:</strong> Powerful technology, simplified
                for everyone.
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center justify-center sm:justify-start space-x-2 mb-2">
              <LightBulbIcon className="h-6 w-6 text-green-600" />
              <h3 className="text-2xl font-semibold text-green-600">
                Our Vision
              </h3>
            </div>
            <p>
              While our journey begins with innovative VPN solutions, we are
              building towards a comprehensive suite of cybersecurity services.
              From secure file storage to antivirus tools, BALTIC SHIELD is your
              trusted partner for a protected digital future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
