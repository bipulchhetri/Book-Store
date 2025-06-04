// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { FaCartShopping } from "react-icons/fa6";
// import { GoHeartFill } from "react-icons/go";
// import { GrLanguage } from "react-icons/gr";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { FaRegEdit } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";
// import Loader from "./Loader";
// const ViewBookDetails = () => {
//   const { id } = useParams();
//   const role = useSelector((state) => state.auth.role);
//   const history = useNavigate();
//   const [Book, setBook] = useState();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//     const fetch = async () => {
//       const res = await axios.get(
//         `http://localhost:1000/api/v1/get-book-by-id/${id}`
//       );
//       setBook(res.data.data);
//     };
//     fetch();
//   }, []);
//   const headers = {
//     bookid: id,
//     id: localStorage.getItem("id"),
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//   };
//   const addToFavourite = async () => {
//     try {
//       const response = await axios.put(
//         "http://localhost:1000/api/v1/add-to-favourite",
//         {},
//         { headers }
//       );
//       alert(response.data.message);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   const addToCart = async () => {
//     try {
//       const response = await axios.put(
//         "http://localhost:1000/api/v1/add-to-cart",
//         {},
//         { headers }
//       );
//       alert(response.data.message);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   const deleteBook = async () => {
//     try {
//       const response = await axios.delete(
//         "http://localhost:1000/api/v1/delete-book",
//         { headers }
//       );
//       alert(response.data.message);
//       history("/all-books");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       {!Book && <Loader />}
//       {Book && (
//         <div className="bg-zinc-900  px-12 py-8 flex flex-col lg:flex-row gap-8 h-auto">
//           <div className="w-full lg:w-3/6 ">
//             <div className=" flex flex-col md:flex-row items-start justify-around  bg-zinc-800 rounded px-4 py-8 gap-4 ">
//               <img
//                 src={Book.url}
//                 alt="book"
//                 className="h-[50vh] md:h-[70vh] rounded "
//               />
//               {localStorage.getItem("id") && (
//                 <div className=" w-full md:w-auto flex flex-row md:flex-col justify-between md:justify-start items-center  mt-4 md:mt-0  ">
//                   {role !== "admin" && (
//                     <>
//                       <button
//                         className="bg-white p-3 rounded md:rounded-full text-2xl font-semibold hover:bg-zinc-200 transition-all duration-300 flex items-center"
//                         onClick={addToFavourite}
//                       >
//                         <GoHeartFill />
//                       </button>
//                       <button
//                         className="mt-0 md:mt-8 bg-blue-500 text-white p-3 rounded md:rounded-full text-2xl  font-semibold flex items-center hover:bg-blue-600 transition-all duration-300"
//                         onClick={addToCart}
//                       >
//                         <FaCartShopping className="me-4 md:me-0" />{" "}
//                         <span className="block md:hidden">Add to cart</span>
//                       </button>
//                     </>
//                   )}
//                   {role === "admin" && (
//                     <>
//                       <Link
//                         to={`/update-book/${id}`}
//                         className="bg-white p-3 rounded md:rounded-full text-2xl font-semibold hover:bg-zinc-200 transition-all duration-300 flex items-center"
//                       >
//                         <FaRegEdit />
//                       </Link>
//                       <button
//                         className="mt-0 md:mt-8 bg-red-500 text-white p-3 rounded md:rounded-full text-2xl  font-semibold flex items-center hover:bg-red-600 transition-all duration-300"
//                         onClick={deleteBook}
//                       >
//                         <MdDelete className="me-4 md:me-0" />{" "}
//                         <span className="block md:hidden">Delete book</span>
//                       </button>
//                     </>
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>
//           <div className="w-full lg:w-3/6 my-8">
//             <h1 className="text-4xl text-zinc-300 font-semibold">
//               {Book.title}
//             </h1>
//             <p className="text-zinc-400 mt-1">by {Book.author}</p>
//             <p className="text-zinc-500 mt-4 text-xl">{Book.desc}</p>
//             <p className="flex mt-4 items-center justify-start text-zinc-400">
//               <GrLanguage className="me-3" /> {Book.language}
//             </p>
//             <p className="mt-4 text-zinc-100 text-3xl font-semibold">
//               Price : ₹ {Book.price}{" "}
//             </p>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ViewBookDetails;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { GoHeartFill } from "react-icons/go";
import { GrLanguage } from "react-icons/gr";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Loader from "./Loader";

const ViewBookDetails = () => {
  const { id } = useParams();
  const role = useSelector((state) => state.auth.role);
  const history = useNavigate();
  const [Book, setBook] = useState();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetch = async () => {
      const res = await axios.get(
        `https://book-store-uvng.onrender.com/api/v1/get-book-by-id/${id}`
      );
      setBook(res.data.data);
    };
    fetch();
  }, []);
  
  const headers = {
    bookid: id,
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  
  const addToFavourite = async () => {
    try {
      const response = await axios.put(
        "https://book-store-uvng.onrender.com/api/v1/add-to-favourite",
        {},
        { headers }
      );
      alert(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  
  const addToCart = async () => {
    try {
      const response = await axios.put(
        "https://book-store-uvng.onrender.com/api/v1/add-to-cart",
        {},
        { headers }
      );
      alert(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  
  const deleteBook = async () => {
    try {
      const response = await axios.delete(
     
        "https://book-store-uvng.onrender.com/api/v1/delete-book",
        { headers }
      );
      alert(response.data.message);
      history("/all-books");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {!Book && <Loader />}
      {Book && (
        <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 relative overflow-hidden">
          {/* Animated background elements */}
          {/* <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute top-60 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
          </div> */}

          <div className="relative z-10 px-6 lg:px-12 py-12">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                
                {/* Left Section - Book Image & Actions */}
                <div className="space-y-8">
                  {/* Book Image Container */}
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                    <div className="relative bg-slate-700/30 rounded-xl p-2 border shadow-xl">
                      <div className="relative overflow-hidden rounded-2xl">
                        <img
                          src={Book.url}
                          alt="book"
                          className="w-full max-w-sm mx-auto h-[300px] md:h-[300px]  transform hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 via-transparent to-transparent"></div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  {localStorage.getItem("id") && (
                    <div className="flex flex-wrap justify-center gap-4">
                      {role !== "admin" && (
                        <>
                          <button
                            className="group relative overflow-hidden bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-pink-500/30"
                            onClick={addToFavourite}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative flex items-center gap-3">
                              <GoHeartFill className="text-xl group-hover:animate-pulse" />
                              <span className="hidden sm:inline">Add to Favourites</span>
                            </div>
                          </button>
                          
                          <button
                            className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
                            onClick={addToCart}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative flex items-center gap-3">
                              <FaCartShopping className="text-xl group-hover:animate-bounce" />
                              <span className="hidden sm:inline">Add to Cart</span>
                            </div>
                          </button>
                        </>
                      )}
                      
                      {role === "admin" && (
                        <>
                          <Link
                            to={`/update-book/${id}`}
                            className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/30 inline-flex items-center gap-3"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative flex items-center gap-3">
                              <FaRegEdit className="text-xl group-hover:rotate-12 transition-transform duration-300" />
                              <span className="hidden sm:inline">Edit Book</span>
                            </div>
                          </Link>
                          
                          <button
                            className="group relative overflow-hidden bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/30"
                            onClick={deleteBook}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative flex items-center gap-3">
                              <MdDelete className="text-xl group-hover:rotate-12 transition-transform duration-300" />
                              <span className="hidden sm:inline">Delete Book</span>
                            </div>
                          </button>
                        </>
                      )}
                    </div>
                  )}
                </div>

                {/* Right Section - Book Details */}
                <div className="space-y-8 lg:pl-8">
                  {/* Title Section */}
                  <div className="space-y-4">
                    <div className="relative">
                      <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-400 bg-clip-text text-transparent leading-tight">
                        {Book.title}
                      </h1>
                      <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"></div>
                    </div>
                    
                    <p className="text-2xl text-slate-300 font-medium">
                      by <span className="text-white font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">{Book.author}</span>
                    </p>
                  </div>

                  {/* Description Card */}
                  <div className="relative group">
                    <div className="absolute -inset- bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-2xl blur"></div>
                    <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30 shadow-xl">
                      <div className="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                      <div className="absolute top-4 left-8 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                      <div className="absolute top-4 left-12 w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                      
                      <p className="text-slate-300 text-lg leading-relaxed pt-4">
                        {Book.desc}
                      </p>
                    </div>
                  </div>

                  {/* Language Section */}
                  <div className="flex items-center space-x-6">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl blur opacity-70"></div>
                      <div className="relative bg-slate-800/60 p-4 rounded-xl border border-indigo-500/30">
                        <GrLanguage className="text-3xl text-indigo-400" />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 uppercase tracking-wider font-semibold">Language</p>
                      <p className="text-2xl font-bold text-white">{Book.language}</p>
                    </div>
                  </div>

                  {/* Price Section */}
                  <div className="relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-60"></div>
                    <div className="relative bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl p-8 border border-green-500/40 shadow-xl">
                      <div className="flex items-baseline space-x-2">
                        <span className="text-sm text-green-300 uppercase tracking-wider font-semibold">Price</span>
                        <div className="flex-1 h-px bg-gradient-to-r from-green-400 to-transparent"></div>
                      </div>
                      <p className="text-5xl font-bold text-white mt-2">
                        ₹ <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">{Book.price}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom gradient line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        </div>
      )}
    </>
  );
};

export default ViewBookDetails;