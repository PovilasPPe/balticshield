import React from "react";

const goalsList = [
  {
    title: "Enhance User Privacy",
    description:
      "Continually refine encryption and no-logs policies to safeguard user data.",
  },
  {
    title: "Deliver Unmatched Performance",
    description:
      "Optimize our network infrastructure for faster, more reliable connections.",
  },
  {
    title: "Expand Global Reach",
    description:
      "Provide secure access to an ever-growing list of servers worldwide.",
  },
  {
    title: "Education & Advocacy",
    description:
      "Raise awareness of online threats and offer tools to protect against them.",
  },
];

function Goals() {
  return (
    <section id="goals" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-green-600 text-center mb-8">
          Our Goals
        </h2>

        {/* Explanation: 
            Using a grid layout similar to Brands.jsx.
            Each card has a white background, padding, shadow, 
            and rounded corners to resemble "bordered" brand cards. 
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {goalsList.map((goal, idx) => (
            <div
              key={idx}
              className="bg-white p-6 shadow-md rounded-lg text-center flex flex-col items-center"
            >
              <h3 className="text-lg font-semibold text-green-600 mb-2">
                {goal.title}
              </h3>
              <p className="text-gray-600">{goal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Goals;
