// LoginPage.js
"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("YOUR_LOGIN_API_ENDPOINT", formData);

      // Handle successful login here
      console.log("Login successful:", response.data);
    } catch (error) {
      // Handle login error
      router.push("/panel")
      console.error("Login error:", error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        className="max-w-md bg-white p-8 rounded shadow-md"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold mb-6">Login</h1>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            نام کاربری:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            رمز عبور:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            ورود
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
