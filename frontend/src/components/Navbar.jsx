

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);
  
  var links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "All Books",
      link: "/all-books",
    },
    {
      title: "Cart",
      link: "/cart",
    },
    {
      title: "Profile",
      link: "/profile",
    },
    {
      title: "Admin Profile",
      link: "/profile",
    },
  ];
  
  const [Nav, setNav] = useState("hidden");
  
  if (isLoggedIn === false) {
    links.splice(2);
  }
  if (isLoggedIn === true && role === "user") {
    links.splice(4, 1);
  }
  if (role === "admin") {
    links.splice(3, 1);
  }

  return (
    <>
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-gradient-to-r from-slate-900/90 via-purple-900/90 to-slate-900/90 border-b border-white/10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center group">
              <Link
                to="/"
                className="flex items-center space-x-3 text-white hover:text-purple-300 transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/5832/5832416.png"
                    alt="logo"
                    className="h-10 w-10 group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg"
                  />
                  <div className="absolute inset-0 bg-purple-500 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                  Readify
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-1">
                {links.map((items, i) => (
                  <div key={i}>
                    {items.title === "Profile" || items.title === "Admin Profile" ? (
                      <Link
                        to={items.link}
                        className="relative px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-500 hover:to-blue-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                      >
                        <span className="relative z-10">{items.title}</span>
                        <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      </Link>
                    ) : (
                      <Link
                        to={items.link}
                        className="relative px-4 py-2 text-sm font-medium text-white/90 hover:text-white rounded-lg hover:bg-white/10 transition-all duration-300 group"
                      >
                        <span className="relative z-10">{items.title}</span>
                        <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
                      </Link>
                    )}
                  </div>
                ))}
                
                {isLoggedIn === false && (
                  <div className="flex items-center space-x-3 ml-6">
                    <Link
                      to="/login"
                      className="px-4 py-2 text-sm font-medium text-white border border-white/30 rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                    >
                      Log In
                    </Link>
                    <Link
                      to="/signup"
                      className="px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-500 hover:to-blue-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setNav(Nav === "hidden" ? "block" : "hidden")}
                className="relative p-2 text-white hover:text-purple-300 hover:bg-white/10 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                type="button"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${Nav === "block" ? "rotate-45 translate-y-0.5" : "-translate-y-1"}`}></span>
                  <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${Nav === "block" ? "opacity-0" : "my-1"}`}></span>
                  <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${Nav === "block" ? "-rotate-45 -translate-y-0.5" : "translate-y-1"}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden ${Nav} transition-all duration-300 ease-in-out`}>
          <div className="px-4 py-6 bg-gradient-to-b from-slate-900/95 to-purple-900/95 backdrop-blur-xl border-t border-white/10">
            <div className="flex flex-col space-y-3">
              {links.map((items, i) => (
                <div key={i}>
                  {items.title === "Profile" || items.title === "Admin Profile" ? (
                    <Link
                      to={items.link}
                      onClick={() => setNav("hidden")}
                      className="block w-full px-4 py-3 text-center text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-lg"
                    >
                      {items.title}
                    </Link>
                  ) : (
                    <Link
                      to={items.link}
                      onClick={() => setNav("hidden")}
                      className="block px-4 py-3 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                    >
                      {items.title}
                    </Link>
                  )}
                </div>
              ))}
              
              {isLoggedIn === false && (
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <Link
                    to="/login"
                    onClick={() => setNav("hidden")}
                    className="block w-full px-4 py-3 text-center text-sm font-medium text-white border border-white/30 rounded-lg hover:bg-white/10 transition-all duration-300"
                  >
                    Log In
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setNav("hidden")}
                    className="block w-full px-4 py-3 text-center text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-lg"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
