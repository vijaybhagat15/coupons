import { useState } from "react";
import { coupons } from "./coupontypes";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function Coupon() {
  const [showCoupons, setShowCoupons] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center">
      <img 
      className="sm:h-96 h-64"
      src="Image/coupon bg.jpg" alt="" />
      <h1 className="text-3xl font-bold text-gray-800">
        Welcome to Discount Coupons
      </h1>
      <p className="text-gray-600 mt-2">
        Easily create and manage discount coupons for your store
      </p>

      <div className="mt-6">
        <button
          onClick={() => setShowCoupons(!showCoupons)}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-600"
        >
          Create Coupon
        </button>
      </div>

      {/* Coupon Modal with Smooth Scale Transition */}
      <div
        className={`fixed inset-0 bg-gray-100 bg-opacity-50 z-40 flex items-center justify-center h-full transition-transform duration-300 ${
          showCoupons ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-96 h-2/3 overflow-y-scroll transition-transform duration-300 transform">
          <div className="flex mb-4">
            <AiOutlineArrowLeft
              className="w-6 h-6 my-auto text-black cursor-pointer border-[1px] border-gray-900 rounded-full p-1"
              onClick={() => setShowCoupons(false)}
            />
            <h2 className="text-lg font-semibold ml-5 my-auto">Select Coupon Type</h2>
          </div>
          <ul className="space-y-3">
            {coupons.map((coupon, index) => (
              <li
                key={index}
                className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
              >
                <Link
                  to={{
                    pathname: "/create-coupon",
                    search: `?type=${encodeURIComponent(coupon.title)}`,
                  }}
                  className="flex items-center gap-3"
                >
                  <span className={`p-2 rounded ${coupon.color}`}>
                    {coupon.icon}
                  </span>
                  <div>
                    <p className="font-medium text-left">{coupon.title}</p>
                    <p className="text-sm text-gray-600 text-left">{coupon.description}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
