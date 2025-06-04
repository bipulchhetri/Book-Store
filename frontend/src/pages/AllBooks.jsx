// import React, { useEffect, useState } from "react";
// import BookCard from "../components/Books/BookCard";
// import axios from "axios";
// import Loader from "./Loader";
// const AllBooks = () => {
//   const [Books, setBooks] = useState();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//     const fetch = async () => {
//       const response = await axios.get(
//         "http://localhost:1000/api/v1/get-all-books"
//       );
//       setBooks(response.data.data);
//     };
//     fetch();
//   }, []);

//   return (
//     <>
//       {!Books && <Loader />}
//       {Books && (
//         <div className="h-auto px-12 py-8 bg-zinc-900">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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

// export default AllBooks;

import React, { useEffect, useState } from "react";
import BookCard from "../components/Books/BookCard";
import axios from "axios";
import Loader from "./Loader";

const AllBooks = () => {
  const [Books, setBooks] = useState();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetch = async () => {
      const response = await axios.get(

        "https://book-store-dqip.onrender.com/api/v1/get-all-books"
      );
      setBooks(response.data.data);
    };
    fetch();
  }, []);

  return (
    <>
      {!Books && <Loader />}
      {Books && (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
            <div className="absolute top-1/2 left-10 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '6s'}}></div>
          </div>

          {/* Header Section */}
          <div className="relative z-10 pt-16 pb-8 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto text-center">
              <div className="relative inline-block">
                <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-400 bg-clip-text text-transparent mb-4">
                  Discover Books
                </h1>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"></div>
              </div>
              <p className="text-xl text-slate-300 mt-6 max-w-2xl mx-auto">
                Explore our curated collection of amazing books from various genres and authors
              </p>
            </div>
          </div>

          {/* Books Grid Section */}
          <div className="relative z-10 px-6 lg:px-12 pb-16">
            <div className="max-w-7xl mx-auto">
              {/* Stats Bar */}
              <div className="mb-12">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600/30 to-purple-600/30 rounded-2xl blur"></div>
                  <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/30">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl border border-cyan-500/30">
                          <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                          </svg>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-white">{Books?.length || 0}</p>
                          <p className="text-sm text-slate-400">Books Available</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-slate-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                        <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                        <span className="ml-2 text-sm font-medium">Live Collection</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Books Grid */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600/10 to-purple-600/10 rounded-3xl blur-xl"></div>
                <div className="relative bg-slate-800/20 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/30">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                    {Books.map((items, i) => (
                      <div 
                        key={i}
                        className="transform hover:scale-105 transition-all duration-500 hover:z-10 relative"
                        style={{
                          animationDelay: `${i * 0.1}s`,
                          animation: 'fadeInUp 0.6s ease-out forwards'
                        }}
                      >
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl blur opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative">
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
                </div>
              </div>

              {/* Bottom Section */}
              <div className="mt-16 text-center">
                <div className="relative inline-block">
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl blur"></div>
                  <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl px-8 py-6 border border-slate-600/30">
                    <p className="text-slate-300 text-lg">
                      Can't find what you're looking for? 
                      <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-semibold ml-2">
                        More books coming soon!
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom gradient line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          
          {/* CSS Animation for fade in effect */}
          <style jsx>{`
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
        </div>
      )}
    </>
  );
};

export default AllBooks;
