import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
    }

    if (!formData.projectType) {
      newErrors.projectType = "Please select a project type.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Form Submitted Successfully!");

      console.log(formData);

      // API Integration will be added later
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {/* Full Name */}

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Full Name
        </label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
        />

        {errors.name && (
          <p className="text-red-500 text-sm mt-2">{errors.name}</p>
        )}
      </div>

      {/* Email */}

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Email Address
        </label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
        />

        {errors.email && (
          <p className="text-red-500 text-sm mt-2">{errors.email}</p>
        )}
      </div>

      {/* Phone */}

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Phone Number
        </label>

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
        />

        {errors.phone && (
          <p className="text-red-500 text-sm mt-2">{errors.phone}</p>
        )}
      </div>

      {/* Project Type */}

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Project Type
        </label>

        <select
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
        >
          <option value="">Select Project Type</option>
          <option value="Residential Solar">Residential Solar</option>
          <option value="Commercial Solar">Commercial Solar</option>
          <option value="Industrial Solar">Industrial Solar</option>
          <option value="Hybrid System">Hybrid System</option>
          <option value="Solar Pump">Solar Pump</option>
          <option value="Other">Other</option>
        </select>

        {errors.projectType && (
          <p className="text-red-500 text-sm mt-2">{errors.projectType}</p>
        )}
      </div>

      {/* Message */}

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Message
        </label>

        <textarea
          rows="5"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Briefly describe your project requirements..."
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition resize-none"
        />

        {errors.message && (
          <p className="text-red-500 text-sm mt-2">{errors.message}</p>
        )}
      </div>

      {/* Button */}

      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold transition duration-300"
      >
        Request Consultation
      </button>
    </form>
  );
}
