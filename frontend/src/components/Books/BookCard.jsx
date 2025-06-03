// import React from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// const BookCard = ({ image, title, author, price, bookid, fav }) => {
//   const headers = {
//     bookid: bookid,
//     id: localStorage.getItem("id"),
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//   };
//   const removeFromFavourite = async () => {
//     try {
//       const response = await axios.put(
//         "http://localhost:1000/api/v1/remove-from-favourite",
//         {},
//         { headers }
//       );
//       alert(response.data.message);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <div className="w-full bg-zinc-800 text-zinc-100 rounded p-4">
//       <Link to={`/view-book-details/${bookid}`} className="">
//         <div className="w-full flex items-center justify-center bg-zinc-900 ">
//           <img src={image} alt="book" className="h-40 object-cover" />
//         </div>
//         <h1 className="mt-4 text-xl font-semibold">{title}</h1>
//         <p className="mt-2 text-zinc-400 font-semibold">by {author}</p>
//         <p className="mt-2 text-zinc-200 font-semibold text-xl">₹ {price}</p>
//       </Link>
//       {fav === true && (
//         <button
//           className="mt-4 bg-red-100 w-full rounded text-red-600  py-2 font-semibold hover:bg-red-200 transition-all duration-300"
//           onClick={removeFromFavourite}
//         >
//           Remove from favourites
//         </button>
//       )}
//     </div>
//   );
// };

// export default BookCard;
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BookCard = ({ image, title, author, price, bookid, fav }) => {
  const headers = {
    bookid: bookid,
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const removeFromFavourite = async () => {
    try {
      const response = await axios.put(
        "http://localhost:1000/api/v1/remove-from-favourite",
        {},
        { headers }
      );
      alert(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="group relative w-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 text-slate-100 rounded-2xl p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2">
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <Link to={`/view-book-details/${bookid}`} className="block">
          {/* Image container with modern styling */}
          <div className="relative w-full flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-4 mb-4 overflow-hidden">
            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                backgroundSize: '20px 20px'
              }}></div>
            </div>
            
            {/* Book image with enhanced styling */}
            <div className="relative">
              <img 
                src={image} 
                alt={`${title} book cover`} 
                className="h-48 w-auto object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-500" 
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Corner accent */}
            <div className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
          </div>

          {/* Book details with improved typography */}
          <div className="space-y-3">
            <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-200 leading-tight line-clamp-2 group-hover:from-purple-200 group-hover:to-blue-200 transition-all duration-300">
              {title}
            </h1>
            
            <div className="flex items-center gap-2 text-slate-400">
              <svg className="w-4 h-4 opacity-60" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              <p className="font-medium group-hover:text-slate-300 transition-colors duration-300">
                {author}
              </p>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {/* <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg> */}
                <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                  ₹ {price}
                </p>
              </div>
              
              {/* View details indicator */}
              <div className="flex items-center gap-1 text-slate-500 group-hover:text-purple-400 transition-colors duration-300">
                <span className="text-sm font-medium">View</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </Link>

        {/* Enhanced remove from favorites button */}
        {fav === true && (
          <div className="mt-6 pt-4 border-t border-slate-700/50">
            <button
              className="group/btn w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 flex items-center justify-center gap-2"
              onClick={removeFromFavourite}
            >
              <svg className="w-5 h-5 group-hover/btn:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <span>Remove from Favorites</span>
            </button>
          </div>
        )}
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-purple-500/20 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-500/20 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

export default BookCard;
