// import React, { useEffect, useState } from "react";
// import BookCard from "../Books/BookCard";
// import axios from "axios";
// const RecentlyAdded = () => {
//   const [Books, setBooks] = useState();
//   useEffect(() => {
//     const fetch = async () => {
//       const response = await axios.get(
//         "http://localhost:1000/api/v1/get-recent-books"
//       );
//       setBooks(response.data.data);
//     };
//     fetch();
//   }, []);

//   return (
//     <>
//       {Books && (
//         <div className="bg-zinc-900 px-12 py-8">
//           <h1 className="text-yellow-100 text-3xl">Recently Added Books</h1>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8 mt-8">
//             {Books.map((items, i) => (
//               <BookCard
//                 bookid={items._id}
//                 image={items.url}
//                 title={items.title}
//                 author={items.author}
//                 price={items.price}
//                 key={i}
//               />
//             ))}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default RecentlyAdded;

import React, { useEffect, useState } from "react";
import BookCard from "../Books/BookCard";
import axios from "axios";

const RecentlyAdded = () => {
  const [Books, setBooks] = useState();
  
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "https://book-store-h62o.onrender.com/api/v1/get-recent-books"
        // "http://localhost:1000/api/v1/get-recent-books"
      );
      setBooks(response.data.data);
    };
    fetch();
  }, []);

  return (
    <>
      {Books && (
        <div className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 px-12 py-12 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
            <div className="absolute bottom-10 right-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse animation-delay-4000"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Header Section */}
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium rounded-full">
                  🔥 Fresh Arrivals
                </span>
              </div>
              
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-blue-200 text-4xl lg:text-5xl font-bold mb-4">
                Recently Added
                <span className="block text-gradient bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Literary Treasures
                </span>
              </h1>
              
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                Discover the latest additions to our collection - handpicked stories and knowledge waiting to be explored
              </p>
              
              {/* Decorative line */}
              <div className="flex justify-center mt-6">
                <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
              </div>
            </div>

            {/* Books Grid */}
            <div className="relative">
              {/* Grid container with enhanced styling */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
                {Books.map((items, i) => (
                  <div 
                    key={i}
                    className="transform hover:scale-105 transition-all duration-300 hover:z-10 relative"
                  >
                    {/* Glow effect on hover */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    
                    <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-1 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                      <BookCard
                        bookid={items._id}
                        image={items.url}
                        title={items.title}
                        author={items.author}
                        price={items.price}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-20 animate-bounce"></div>
              <div className="absolute top-1/4 -right-4 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute bottom-10 left-1/4 w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-25 animate-bounce animation-delay-1000"></div>
            </div>

            {/* Bottom section with stats or call-to-action */}
            <div className="text-center mt-16">
              <div className="inline-flex items-center gap-8 text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-sm">Updated Daily</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse animation-delay-1000"></div>
                  <span className="text-sm">Curated Collection</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse animation-delay-2000"></div>
                  <span className="text-sm">Premium Quality</span>
                </div>
              </div>
            </div>
          </div>

          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: '20px 20px'
            }}></div>
          </div>
        </div>
      )}
    </>
  );
};

export default RecentlyAdded;
