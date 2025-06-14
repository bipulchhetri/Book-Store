import React, { useEffect, useState } from "react";
import Loader from "../../pages/Loader";
import { FaUserLarge, FaCheck } from "react-icons/fa6";
import axios from "axios";
import { Link } from "react-router-dom";
import { IoOpenOutline } from "react-icons/io5";
import SeeUserData from "./SeeUserData";

const AllOrders = () => {
  const [OrderHistory, setOrderHistory] = useState();
  const [userDiv, setuserDiv] = useState("hidden");
  const [userDivData, setuserDivData] = useState();
  const [EditableDiv, setEditableDiv] = useState(-1);
  const [Values, setValues] = useState({ status: "" });

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(
          "https://book-store-uvng.onrender.com/api/v1/get-all-orders",
          { headers }
        );
        setOrderHistory(res.data.data);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };
    fetch();
  }, []);

  const change = (e) => {
    const { value } = e.target;
    setValues({ status: value });
  };

  const submitChanges = async (i) => {
    const id = OrderHistory[i]._id;
    try {
      const response = await axios.put(
        `https://book-store-uvng.onrender.com/api/v1/update-status/${id}`,
        Values,
        { headers }
      );
      alert(response.data.message);
    } catch (error) {
      console.error("Failed to update status:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <>
      {!OrderHistory && <Loader />}

      {OrderHistory && OrderHistory.length === 0 && (
        <div className="h-[80vh] p-4 text-zinc-100">
          <div className="h-full flex flex-col items-center justify-center">
            <h1 className="text-5xl font-semibold text-zinc-500 mb-8">
              No Order History
            </h1>
            <img
              src="https://cdn-icons-png.flaticon.com/128/9961/9961218.png"
              alt=""
              className="h-[20vh] mb-8"
            />
          </div>
        </div>
      )}

      {OrderHistory && OrderHistory.length > 0 && (
        <div className="h-full p-0 md:p-4 text-zinc-100">
          <h1 className="text-3xl md:text-5xl font-semibold text-zinc-500 mb-8">
            All Orders History
          </h1>

          <div className="mt-4 bg-zinc-800 w-full rounded py-2 px-4 flex gap-2">
            <div className="w-[3%] text-center">Sr.</div>
            <div className="w-[40%] md:w-[22%]">Books</div>
            <div className="w-0 md:w-[45%] hidden md:block">Description</div>
            <div className="w-[17%] md:w-[9%]">Price</div>
            <div className="w-[30%] md:w-[16%]">Status</div>
            <div className="w-[10%] md:w-[5%]">
              <FaUserLarge />
            </div>
          </div>

          {OrderHistory.map((items, i) => (
            <div
              key={i}
              className="bg-zinc-800 w-full rounded py-2 px-4 flex gap-2 hover:bg-zinc-900 hover:cursor-pointer transition-all duration-300"
            >
              <div className="w-[3%] text-center">{i + 1}</div>

              <div className="w-[40%] md:w-[22%]">
                {items.book ? (
                  <Link
                    to={`/view-book-details/${items.book._id}`}
                    className="hover:text-blue-300"
                  >
                    {items.book.title}
                  </Link>
                ) : (
                  <span className="text-red-400">Book Not Found</span>
                )}
              </div>

              <div className="w-0 md:w-[45%] hidden md:block">
                {items.book ? (
                  <h1>{items.book.desc.slice(0, 50)} ...</h1>
                ) : (
                  <h1 className="text-red-400">No Description</h1>
                )}
              </div>

              <div className="w-[17%] md:w-[9%]">
                {items.book ? `₹ ${items.book.price}` : "N/A"}
              </div>

              <div className="w-[30%] md:w-[16%] font-semibold">
                <button
                  className={`${
                    EditableDiv === i ? "hidden" : "block"
                  } hover:scale-105`}
                  onClick={() => setEditableDiv(i)}
                >
                  <div
                    className={
                      items.status === "Order placed"
                        ? "text-yellow-500"
                        : items.status === "Canceled"
                        ? "text-red-500"
                        : "text-green-500"
                    }
                  >
                    {items.status}
                  </div>
                </button>

                {EditableDiv === i && (
                  <div className="flex mt-4">
                    <select
                      name="status"
                      className="bg-gray-800 text-white px-2 py-1 rounded"
                      onChange={change}
                    >
                      {[
                        "Order placed",
                        "Out for delivery",
                        "Delivered",
                        "Canceled",
                      ].map((status, idx) => (
                        <option key={idx} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                    <button
                      className="text-green-500 hover:text-pink-600 mx-2"
                      onClick={() => {
                        setEditableDiv(-1);
                        submitChanges(i);
                      }}
                    >
                      <FaCheck />
                    </button>
                  </div>
                )}
              </div>

              <div className="w-[10%] md:w-[5%]">
                <button
                  className="text-xl hover:text-orange-500"
                  onClick={() => {
                    setuserDiv("fixed");
                    setuserDivData(items.user);
                  }}
                >
                  <IoOpenOutline />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {userDivData && (
        <SeeUserData
          userDivData={userDivData}
          userDiv={userDiv}
          setuserDiv={setuserDiv}
        />
      )}
    </>
  );
};

export default AllOrders;
