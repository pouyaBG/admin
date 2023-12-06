"use client";
import React from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";

const FormSelect = () => {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      values.Pool_price = parseInt(values.Pool_price,10);
      values.Massage_price = parseInt(values.Massage_price,10);
      values.quantity = parseInt(values.quantity,10);
      // Send a POST request with Axios
      const response = await axios.post(
        "https://django-sport.iran.liara.run/api/secure/TicketShop/",
        values,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("login"),
          },
        }
      );
      window.location.reload();
      // Reset the form after successful submission
      resetForm();
    } catch (error) {
      console.log(typeof(values.Pool_price));
      console.log(values);
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="mt-10 flex items-center justify-center ">
      <Formik
        initialValues={{
          day_name: "",
          gender: "",
          Pool_price: "",
          Massage_price: "",
          quantity: "",
          start_time: "",
          end_time: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className=" w-full flex flex-col gap-1 mx-10 bg-white p-5 rounded shadow-2xl ">
          <div className="flex items-center gap-20 ">
            <div className="mb-4">
              <label
                htmlFor="day_name"
                className="block text-sm font-medium text-gray-600"
              >
                روز:
              </label>
              <Field
                as="select"
                id="day_name"
                name="day_name"
                className="p-2 border w-full text-black"
              >
                <option value="">انتخاب کنید</option>
                <option value="شنبه">شنبه</option>
                <option value="یک‌شنبه">یک‌شنبه</option>
                <option value="دو‌شنبه">دو‌شنبه</option>
                <option value="سه شنبه">سه شنبه</option>
                <option value="چهار شنبه">چهار شنبه</option>
                <option value="پنج شنبه">پنج شنبه</option>
                <option value="جمعه">جمعه</option>
              </Field>
            </div>
            <div className="mb-4">
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-600"
              >
                ساسن:
              </label>
              <Field
                as="select"
                id="gender"
                name="gender"
                className="p-2 border w-full text-black"
              >
                <option value="">انتخاب کنید</option>
                <option value="F">آقایان</option>
                <option value="M">بانوان</option>
              </Field>
            </div>
            <div className="mb-4">
              <label
                htmlFor="start_time"
                className="block text-sm font-medium text-gray-600"
              >
                زمان شروع:
              </label>
              <Field
                as="select"
                id="start_time"
                name="start_time"
                className="p-2 border w-full text-black"
              >
                <option value="">انتخاب کنید</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </Field>
            </div>
            <div className="mb-4">
              <label
                htmlFor="end_time"
                className="block text-sm font-medium text-gray-600"
              >
                زمان پایان:
              </label>
              <Field
                as="select"
                id="end_time"
                name="end_time"
                className="p-2 border w-full text-black"
              >
                <option value="">انتخاب کنید</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
              </Field>
            </div>
            <div className="mb-4">
              <label
                htmlFor="Pool_price"
                className="block text-sm font-medium text-gray-600"
              >
                قیمت بلیط:
              </label>
              <Field
                as="select"
                id="Pool_price"
                name="Pool_price"
                className="p-2 border w-full text-black"
              >
                <option value="">انتخاب کنید</option>
                <option value="60000">60000</option>
                <option value="120000">120000</option>
                <option value="80000">80000</option>
              </Field>
            </div>
            <div className="mb-4">
              <label
                htmlFor="Massage_price"
                className="block text-sm font-medium text-gray-600"
              >
                قیمت ماساژ:
              </label>
              <Field
                as="select"
                id="Massage_price"
                name="Massage_price"
                className="p-2 border w-full text-black"
              >
                <option value="">انتخاب کنید</option>
                <option value="60000">60000</option>
                <option value="120000">120000</option>
                <option value="80000">80000</option>
              </Field>
            </div>
            <div>
              <div className="mb-4">
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium text-gray-600"
                >
                  ظرفیت:
                </label>
                <Field
                  as="select"
                  id="quantity"
                  name="quantity"
                  className="p-2 border w-full text-black"
                >
                  <option value="">انتخاب کنید</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                  <option value="150">150</option>
                </Field>
              </div>
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
