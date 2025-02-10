import React from "react";

const brands = [
  {
    name: "ExplorerVPN",
    description:
      "Explore the world securely with blazing-fast servers and top-tier encryption.",
    link: "https://explorervpn.com/",
    logo: "https://explorervpn.com/wp-content/themes/explorerVPN/images/logo.png",
  },
  {
    name: "VPN Brand B",
    description: "Streaming optimized with no logs policy.",
    logo: "https://source.unsplash.com/200x200/?vpn,streaming",
  },
  {
    name: "VPN Brand C",
    description: "Budget-friendly with strong encryption.",
    logo: "https://source.unsplash.com/200x200/?cybersecurity,shield",
  },
];

function Brands() {
  return (
    <section id="brands" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-green-600 text-center mb-8">
          Our Brands
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-md rounded-lg text-center flex flex-col items-center"
            >
              <img
                src={brand.logo}
                alt={`${brand.name} Logo`}
                className="mb-4 w-24 h-24 object-cover rounded-full"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold text-green-600 mb-2">
                {brand.name}
              </h3>
              <p className="text-gray-600">{brand.description}</p>
              {brand.link && (
                <a
                  href={brand.link}
                  className="text-blue-500 hover:underline mt-2 inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands;
