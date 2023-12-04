"use client";
import React from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";

const FormSelect = () => {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      // Send a POST request with Axios
      const response = await axios.post("YOUR_API_ENDPOINT", values);
      console.log("Form data sent successfully:", response.data);

      // Reset the form after successful submission
      resetForm();
    } catch (error) {
      console.log(values);
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Formik
        initialValues={{
          day: "",
          start: "",
          end: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-4 bg-white p-6 rounded shadow-md">
          <div className="flex items-center justify-between gap-10">
            <div className="mb-4">
              <label
                htmlFor="day"
                className="block text-sm font-medium text-gray-600"
              >
                روز:
              </label>
              <Field
                as="select"
                id="day"
                name="day"
                className="p-2 border w-full text-black"
              >
                <option value="">انتخاب کنید</option>
                <option value="شنبه">شنبه</option>
                <option value="یک‌شنبه">یک‌شنبه</option>
                <option value="دو‌شنبه">دو‌شنبه</option>
              </Field>
            </div>
            <div className="mb-4">
              <label
                htmlFor="start"
                className="block text-sm font-medium text-gray-600"
              >
                زمان شروع:
              </label>
              <Field
                as="select"
                id="start"
                name="start"
                className="p-2 border w-full text-black"
              >
                <option value="">انتخاب کنید</option>
                <option value="12">12</option>
                <option value="14">14</option>
                <option value="16">16</option>
              </Field>
            </div>
            <div className="mb-4">
              <label
                htmlFor="end"
                className="block text-sm font-medium text-gray-600"
              >
                زمان پایان:
              </label>
              <Field
                as="select"
                id="end"
                name="end"
                className="p-2 border w-full text-black"
              >
                <option value="">انتخاب کنید</option>
                <option value="12">12</option>
                <option value="14">14</option>
                <option value="16">16</option>
                {/* Add end time options */}
              </Field>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2  rounded-lg"
          >
            ثبت تغییرات
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormSelect;
