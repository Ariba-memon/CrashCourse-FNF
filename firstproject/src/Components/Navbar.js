import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../Assets/Logo.png'
import Pdf from '../Assets/Book.pdf'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-gray-700 text-white p-1 md:text-base text-sm flex justify-center items-center  text-center font-sans">
        Unleash the Power of Integration: Discover Our API Today! 🚀
      </div>

      <nav className="bg-black p-4  ">
        <div className="max-w-7xl mx-auto flex justify-between items-center xl:pl-32 lg:pl-24  xl:pr-52 lg:pr-24 md:px-8 sm:4 px-3">
          <div>
            <Link to="/">
              <img src={logo} alt="Logo" width={60} height={50}/>
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-8 ">
              <li>
                <Link to="/">
                  <div className="text-white hover:text-gray-300 py-2 font-semibold font-sans">
                    Home
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <div className="text-white hover:text-gray-300 py-2 font-semibold font-sans">
                    About Us
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <div className="text-white hover:text-gray-300 py-2 font-semibold  font-sans">
                    Contact
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/postblogs">
                  <div className="text-white hover:text-gray-300 py-2 font-semibold font-sans">
                  PostBlogs
                  </div>
                </Link>
              </li>
              {/* <li>
                <Link to="/blog">
                  <div className="text-white hover:text-gray-300 py-2 font-semibold font-sans">
                    Blog
                  </div>
                </Link>
              </li> */}
              <div>
                <Link to={Pdf} target="blank">
                <button className="py-2 px-10 bg-gray-700  rounded-lg md:ml-12  font-semibold text-[#FFFFFF] font-sans">
                  DownloadPdf
                </button>
                </Link>
              </div>
            </ul>
          </div>

          {/* menu button  */}
          <div className="md:hidden ">
            <button
              className="text-white focus:outline-none "
              onClick={toggleMenu}
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden my-3">
            <ul className="flex flex-col space-y-4 bg-[#FFE4D9] py-12 px-8">
              <li>
                <Link to="/">
                  <div className="text-white hover:text-gray-300 font-sans">
                    Home
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <div className="text-white hover:text-gray-300 font-sans">
                    About Us
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <div className="text-white hover:text-gray-300 font-sans">
                   Contact
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/contact-us">
                  <div className="text-white hover:text-gray-300 font-sans">
                    Contact
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/postblog">
                  <div className="text-white hover:text-gray-300 font-sans">
                   PostBlog
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
