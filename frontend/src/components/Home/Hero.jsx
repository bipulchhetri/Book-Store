

import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 h-auto lg:h-[89vh] w-full flex flex-col lg:flex-row px-10 py-8 lg:py-0 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Content section */}
      <div className="relative z-10 w-full lg:w-3/6 h-[100%] flex items-center justify-center">
        <div className="w-full">
          <div className="mb-6">
            <span className="inline-block mt-5 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium rounded-full mb-6 animate-pulse">
              📚 Welcome to Readify
            </span>
          </div>
          
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-blue-200 text-5xl lg:text-7xl font-bold text-center lg:text-left leading-tight mb-6">
            Embark on Literary
            <span className="block text-gradient bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Adventures
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 mt-5 text-center lg:text-left leading-relaxed max-w-lg">
            Dive into worlds of wonder, knowledge, and imagination. Your next favorite story awaits in our carefully curated universe of books.
          </p>
          
          <div className="flex justify-center lg:justify-start mt-8">
            <Link
              to="/all-books"
              className="group relative my-5 lg:my-8 text-2xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full py-4 px-10 flex items-center justify-center text-white font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <span className="relative z-10 flex items-center gap-3">
                Explore Collection
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            </Link>
          </div>
          
          {/* Stats or features */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-8  text-slate-400">
            <div className="text-center lg:text-left">
              <div className="text-2xl font-bold text-white">10,000+</div>
              <div className="text-sm">Books Available</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-sm">Genres</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-sm">Access</div>
            </div>
          </div>
        </div>
      </div>

      {/* Image section with modern styling */}
      <div className="relative z-10 w-full lg:w-3/6 h-auto lg:h-[100%] flex items-center justify-center mt-8 lg:mt-0">
        <div className="relative">
          {/* Decorative elements around image */}
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-20"></div>
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur opacity-30"></div>
          
          {/* Main image container */}
          <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-1 shadow-xl">
            <img
              src="https://img.freepik.com/premium-photo/book-education-png-icon-sticker-3d-rendering-transparent-background_53876-966605.jpg?ga=GA1.1.230981918.1717932878&semt=ais_items_boosted&w=440"
              alt="Discover amazing books and stories"
              className="h-auto lg:h-[100%] w-full object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold animate-bounce">
            ✨
          </div>
          <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm animate-pulse">
            📖
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 animate-bounce hidden lg:block">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;

