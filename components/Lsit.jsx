"use client";
import { headers } from "@/next.config";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Lsit = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("https://django-sport.iran.liara.run/api/secure/ticketshop_get/", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAxNzI0MjgwLCJpYXQiOjE3MDE3MTcwODAsImp0aSI6ImJmYjliMjRiMmMzZDRiNTZiNWUwYmE2NTM4N2FmYzhlIiwidXNlcl9pZCI6Mn0.Mk6KhpHSD0Pjb_sdqsPZfdfqCDDkBM-CuOeVrWayXOo",
        },
      })
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="w-full m-auto flex items-center justify-center mt-20 ">
      <table className="text-black bg-white p-5 rounded-xl shadow-2xl ">
        <tr>
          <th className="p-5">روز</th>
          <th className="p-5">جنسیت</th>
          <th className="p-5">قیمت استخر</th>
          <th className="p-5">قیمت ماساژ</th>
          <th className="p-5">تعداد</th>
          <th className="p-5">زمان شروع</th>
          <th className="p-5">زمان پایان</th>
        </tr>
        {data?.map((item, id) => (
          <tr className="p-5" key={id}>
            <td className="p-3">{item.day_name}</td>
            <td className="p-3">{item.gender}</td>
            <td className="p-3">{item.Pool_price}</td>
            <td className="p-3">{item.Massage_price}</td>
            <td className="p-3">{item.quantity}</td>
            <td className="p-3">{item.start_time}</td>
            <td className="p-3">{item.end_time}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Lsit;
