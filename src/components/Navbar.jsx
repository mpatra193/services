import { useState } from 'react'
import logo from "../assets/Company Logo 1.png"
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white bg-opacity-30">
        <div className="px-4 mx-auto sm:px-6 lg:px-9">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0 w-[50px] h-[50px] flex items-center justify-center ml-[40px]">
              <img src={logo} alt='carbon crunch logo'  />
              <span className='font-dmsans'>Carboncrunch</span>
            </div>

            {/* Hamburger menu for mobile */}
            <button
              type="button"
              className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)} // You'll need to add state management
            >
              {/* Menu closed icon */}
              <svg
                className={`w-6 h-6 ${isMenuOpen ? 'hidden' : 'block'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16"></path>
              </svg>

              {/* Menu open icon */}
              <svg
                className={`w-6 h-6 ${isMenuOpen ? 'block' : 'hidden'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            {/* Desktop navigation */}
            <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
              <a href="#" title="" className="dm-sans-class text-base text-black transition-all duration-200 hover:text-opacity-80"> Home </a>
              <a href="#" title="" className="dm-sans-class text-base text-black transition-all duration-200 hover:text-opacity-80"> Services </a>
              <a href="#" title="" className="dm-sans-class text-base text-black transition-all duration-200 hover:text-opacity-80"> Blog </a>
              <a href="#" title="" className="dm-sans-class text-base text-black transition-all duration-200 hover:text-opacity-80"> About Us </a>
              <a href="#" title="" className="dm-sans-class text-base text-black transition-all duration-200 hover:text-opacity-80"> Contact </a>
            </div>

            {/* Desktop CTA buttons */}
            <div className="hidden lg:block">
              <a href="#" title="" className="inline-flex items-center justify-center mx-2 px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-black bg-lightprimary rounded-md" role="button"> Login </a>
              <a href="#" title="" className="inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-black bg-primary rounded-md" role="button"> Book Demo </a>
            </div>
          </div>
        </div>

        {/* Mobile menu - shows when hamburger is clicked */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="absolute right-0 px-2 w-fit z-9 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
            <a href="#" className="block px-3 py-2 text-base font-medium text-black hover:bg-gray-100 rounded-md">Home</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-black hover:bg-gray-100 rounded-md">Services</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-black hover:bg-gray-100 rounded-md">Blog</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-black hover:bg-gray-100 rounded-md">About Us</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-black hover:bg-gray-100 rounded-md">Contact</a>

            {/* Mobile CTA buttons */}
            <div className="flex flex-col space-y-2 mt-3 px-3 pt-2 pb-3">
              <a href="#" className="w-full text-center px-4 py-2 text-base font-semibold text-black bg-lightprimary rounded-md hover:bg-yellow-300">Login</a>
              <a href="#" className="w-full text-center px-4 py-2 text-base font-semibold text-black bg-primary rounded-md hover:bg-yellow-300">Book Demo</a>
            </div>
          </div>
        </div>
      </header>

      

    </>
  )
}

export default Navbar;