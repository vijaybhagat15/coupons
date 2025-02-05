import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Switch } from "@headlessui/react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function CreateCoupon() {
  const [couponCode, setCouponCode] = useState("");
  const [usageLimit, setUsageLimit] = useState("Unlimited");
  const [usagePerCustomer, setUsagePerCustomer] = useState("Only once");
  const [couponDescription, setCouponDescription] = useState("");
  const [discountPercent, setDiscountPercent] = useState("");
  const [minOrderType, setMinOrderType] = useState("value");
  const [minOrderValue, setMinOrderValue] = useState("");
  const [maxDiscount, setMaxDiscount] = useState("");
  const [applyCouponOn, setApplyCouponOn] = useState("All products");
  const [showCoupon, setShowCoupon] = useState(true);
  const [onlinePayments, setOnlinePayments] = useState(false);
  const [newCustomers, setNewCustomers] = useState(false);
  const [autoApply, setAutoApply] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [setEndDate, setSetEndDate] = useState(false);
  const [endDate, setEndDateValue] = useState("");

  // Store coupon data in an array of objects
  const [coupons, setCoupons] = useState([]);

  const handleCreateCoupon = () => {
    const newCoupon = {
      couponCode,
      usageLimit,
      usagePerCustomer,
      couponDescription,
      discountPercent,
      minOrderType,
      minOrderValue,
      maxDiscount,
      applyCouponOn,
      showCoupon,
      onlinePayments,
      newCustomers,
      autoApply,
      startDate,
      startTime,
      setEndDate,
      couponTitle,
      endDate: setEndDate ? endDate : null,
    };

    setCoupons([...coupons, newCoupon]);

    console.log("Coupon Created:", newCoupon);
  };  
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCouponTitle = queryParams.get("type") || "Default Coupon";
  
  // State to manage selected coupon title
  const [couponTitle, setCouponTitle] = useState(initialCouponTitle);
  
  const handleCouponTitleChange = (event) => {
    setCouponTitle(event.target.value);
  };
  
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-4">
          <div className="flex items-center gap-2">
            <Link to="/Coupon">
            <AiOutlineArrowLeft className="w-6 h-6 text-black cursor-pointer border-[1px] border-black rounded-full p-1" />

            </Link>
            <h1 className="text-lg font-semibold">Create coupon</h1>
          </div>
        </div>

        {/* Coupon Code */}
        <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700">Coupon Type</label>
        <select
          value={couponTitle}
          onChange={handleCouponTitleChange}
          className="mt-1 w-full px-3 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Percentage discount">Percentage discount</option>
          <option value="Flat discount">Flat discount</option>
          <option value="Buy X Get Y Free">Buy X Get Y Free</option>
          <option value="Freebie">Freebie</option>
          <option value="Free shipping">Free shipping</option>
          <option value="Loyalty points">Loyalty points</option>
        </select>

          <label className="block text-sm font-medium text-gray-700">
            Coupon code <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            placeholder="Enter coupon code"
            className="mt-1 w-full px-3 py-2 border rounded-lg"
          />
        </div>

        {/* Usage Limit */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Max Count of Coupon Usage</label>
            <select value={usageLimit} onChange={(e) => setUsageLimit(e.target.value)} className="mt-1 w-full px-3 py-2 border rounded-lg">
              <option>Unlimited</option>
              <option>Limited</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Usage limit per customer</label>
            <select value={usagePerCustomer} onChange={(e) => setUsagePerCustomer(e.target.value)} className="mt-1 w-full px-3 py-2 border rounded-lg">
              <option>Only once</option>
              <option>Multiple times</option>
            </select>
          </div>
        </div>

        {/* Coupon Description */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Coupon description</label>
          <input
            type="text"
            value={couponDescription}
            onChange={(e) => setCouponDescription(e.target.value)}
            placeholder="Enter coupon description"
            className="mt-1 w-full px-3 py-2 border rounded-lg"
          />
        </div>

        {/* Discount Percent */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Discount percent</label>
          <input
            type="text"
            value={discountPercent}
            onChange={(e) => setDiscountPercent(e.target.value)}
            placeholder="Enter percentage"
            className="mt-1 w-full px-3 py-2 border rounded-lg"
          />
        </div>

        {/* Minimum Order Condition */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Minimum Order Condition</label>
          <div className="flex gap-4 mt-1">
            <label className="flex items-center">
              <input type="radio" checked={minOrderType === "value"} onChange={() => setMinOrderType("value")} className="mr-2" />
              Order value
            </label>
            <label className="flex items-center">
              <input type="radio" checked={minOrderType === "quantity"} onChange={() => setMinOrderType("quantity")} className="mr-2" />
              Order quantity
            </label>
          </div>
        </div>

        {/* Min and Max Order Value */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Minimum order value <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-500">₹</span>
              <input
                type="text"
                value={minOrderValue}
                onChange={(e) => setMinOrderValue(e.target.value)}
                placeholder="Enter amount"
                className="mt-1 w-full px-3 py-2 pl-7 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Maximum discount
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-500">₹</span>
              <input
                type="text"
                value={maxDiscount}
                onChange={(e) => setMaxDiscount(e.target.value)}
                placeholder="Enter amount"
                className="mt-1 w-full px-3 py-2 pl-7 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Apply Coupon On */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Apply coupon on
          </label>
          <select
            value={applyCouponOn}
            onChange={(e) => setApplyCouponOn(e.target.value)}
            className="mt-1 w-full px-3 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>All products</option>
            <option>Specific products</option>
            <option>Categories</option>
          </select>
        </div>

        {/* Coupon Functionality */}
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Coupon Functionality</h3>
          <div className="flex items-center justify-between mb-2">
            <span>Show coupon to customer</span>
            <Switch
              checked={showCoupon}
              onChange={setShowCoupon}
              className={`${showCoupon ? "bg-blue-500" : "bg-gray-300"} relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span className="sr-only">Show coupon</span>
              <span className={`${showCoupon ? "translate-x-6" : "translate-x-1"} inline-block h-4 w-4 transform bg-white rounded-full`} />
            </Switch>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span>Valid only for online payments</span>
            <Switch
              checked={onlinePayments}
              onChange={setOnlinePayments}
              className={`${onlinePayments ? "bg-blue-500" : "bg-gray-300"} relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span className="sr-only">Online payments</span>
              <span className={`${onlinePayments ? "translate-x-6" : "translate-x-1"} inline-block h-4 w-4 transform bg-white rounded-full`} />
            </Switch>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span>Valid only for new customers</span>
            <Switch
              checked={newCustomers}
              onChange={setNewCustomers}
              className={`${newCustomers ? "bg-blue-500" : "bg-gray-300"} relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span className="sr-only">New customers</span>
              <span className={`${newCustomers ? "translate-x-6" : "translate-x-1"} inline-block h-4 w-4 transform bg-white rounded-full`} />
            </Switch>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span>Auto apply coupon</span>
            <Switch
              checked={autoApply}
              onChange={setAutoApply}
              className={`${autoApply ? "bg-blue-500" : "bg-gray-300"} relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span className="sr-only">Auto apply</span>
              <span className={`${autoApply ? "translate-x-6" : "translate-x-1"} inline-block h-4 w-4 transform bg-white rounded-full`} />
            </Switch>
          </div>
        </div>

        {/* Coupon Validity */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Coupon Validity</label>
          <div className="flex space-x-2 mt-1">
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="border rounded-lg p-2 w-1/2" />
            <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} className="border rounded-lg p-2 w-1/2" />
          </div>
          <div className="mt-2 flex items-center">
            <input type="checkbox" checked={setEndDate} onChange={() => setSetEndDate(!setEndDate)} className="mr-2" />
            <span>Set an end date</span>
          </div>
          {setEndDate && (
            <input type="date" value={endDate} onChange={(e) => setEndDateValue(e.target.value)} className="border rounded-lg p-2 mt-2 w-full" />
          )}
        </div>
        {/* Submit Button */}
        <button onClick={handleCreateCoupon} className="w-full bg-blue-500 text-white p-2 rounded-lg mt-4 hover:bg-blue-600">
          Create Coupon
        </button>
      </div>
    </div>
  );
}