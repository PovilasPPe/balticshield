import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("");

    // Example: Simple client-side demonstration (no backend)
    // For a real form, see instructions for contact.php or Node/Nodemailer or EmailJS
    if (formData.name && formData.email && formData.message) {
      setStatus("Thank you! We will get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Please fill out all fields.");
    }
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-green-600 text-center mb-8">
          Contact Us
        </h2>
        {status && (
          <div className="text-center mb-4">
            <p className="text-red-500">{status}</p>
          </div>
        )}
        <form className="max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-gray-700">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
