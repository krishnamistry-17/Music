import logo from "../../assets/svg/applogo.svg";
import dropdown from "../../assets/svg/dropdown.svg";
import cart from "../../assets/svg/cart.svg";
import company from "../../assets/svg/compnay.svg";
import relayicon from "../../assets/svg/relayicon.svg";
import blog from "../../assets/svg/blog.svg";
import chowpass from "../../assets/svg/chowpass.svg";
import contacts from "../../assets/svg/contacts.svg";
import customers from "../../assets/svg/customers.svg";
import vendores from "../../assets/svg/vendores.svg";
import riders from "../../assets/svg/riders.svg";
import instagram from "../../assets/svg/instagram.svg";
import { useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isopen, setIsOpen] = useState(false);
  const [isNewOpen, setIsNewOpen] = useState(false);

  const handleOption = () => setIsOpen(!isopen);
  const handleNewOption = () => setIsNewOpen(!isNewOpen);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigate = useNavigate();
  const location = useLocation();

  const [selectedMenu, setSelectedMenu] = useState("Customers");
  const [newSelect, setNewSelect] = useState("Products");

  const handleHome = () => {
    navigate("/");
  };

  const handleFaqClick = () => {
    if (location.pathname.startsWith("/riders")) {
      navigate("/riders#faqs");
    } else if (location.pathname.startsWith("/vendores")) {
      navigate("/vendores#faqs");
    } else if (location.pathname.startsWith("/company")) {
      navigate("/company#faqs");
    } else if (location.pathname.startsWith("/blog")) {
      navigate("/blog#faqs");
    } else if (location.pathname.startsWith("/contact")) {
      navigate("/contact#faqs");
    } else if (location.pathname.startsWith("/chowpass")) {
      navigate("/chowpass#faqs");
    } else if (location.pathname.startsWith("/relay")) {
      navigate("/relay#faqs");
    } else {
      navigate("/#faqs");
    }
  };

  const handleVendores = () => {
    setSelectedMenu("Vendores");
    navigate("/vendores");
    setIsOpen(false);
  };

  const handleRiders = () => {
    setSelectedMenu("Riders");
    navigate("/riders");
    setIsOpen(false);
  };

  const handleCustomres = () => {
    setSelectedMenu("Customers");
    navigate("/");
    setIsOpen(false);
  };

  const handleChowPass = () => {
    setNewSelect("ChowPass");
    navigate("/chowpass");
    setIsNewOpen(false);
  };

  const handleRelay = () => {
    setNewSelect("Relay");
    navigate("/relay");
    setIsNewOpen(false);
  };

  const handleProducts = () => {
    setNewSelect("Products");
    navigate("/");
    setIsNewOpen(false);
  };

  return (
    <>
      <header className="w-full bg-white shadow-sm px-4 py-3 sm:px-10 sm:py-5  sticky top-0 z-50">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <img
              src={logo}
              alt="App Logo"
              className="h-8 sm:h-10 md:block hidden"
              onClick={handleHome}
            />
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <div className=" relative flex items-center">
              <button
                onClick={handleNewOption}
                className="text-black text-[16px] sm:pl-0 pl-[5px] flex font-semibold"
              >
                {newSelect}
                <img src={dropdown} alt="dropdown" className="pl-[5px]" />
              </button>
              {isNewOpen && (
                <div className="absolute top-12 right-0 bg-white rounded-lg shadow-md mt-1.5 flex flex-col z-50">
                  {newSelect !== "ChowPass" && (
                    <button
                      onClick={handleChowPass}
                      className="px-6 py-4 hover:bg-gray-100 text-left"
                    >
                      ChowPass
                    </button>
                  )}
                  {newSelect !== "Relay" && (
                    <button
                      onClick={handleRelay}
                      className="px-6 py-4 hover:bg-gray-100 text-left"
                    >
                      Relay
                    </button>
                  )}
                  {newSelect !== "Products" && (
                    <button
                      onClick={handleProducts}
                      className="px-6 py-4 hover:bg-gray-100 text-left"
                    >
                      Products
                    </button>
                  )}
                </div>
              )}
            </div>
            <Link
              to="/company"
              className="text-black text-[16px] font-medium hover:text-green-bg transition"
            >
              Company
            </Link>
            <a
              className="text-black text-[16px] font-medium hover:text-green-bg transition cursor-pointer"
              onClick={handleFaqClick}
            >
              FAQs
            </a>
            <Link
              to="/blog"
              className="text-black text-[16px] font-medium hover:text-green-bg transition"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-black text-[16px] font-medium hover:text-green-bg transition"
            >
              Contact
            </Link>
          </nav>

          {/* Right Side */}
          <div className="relative flex items-center">
            <button
              onClick={handleOption}
              className="text-black text-[16px] sm:pl-0 pl-[5px] md:flex hidden font-semibold"
            >
              {selectedMenu}
              <img src={dropdown} alt="dropdown" className="pl-[5px]" />
            </button>

            {isopen && (
              <div className="absolute top-12 right-0 bg-white rounded-lg shadow-md mt-2 md:flex hidden flex-col z-50">
                {selectedMenu !== "Vendores" && (
                  <button
                    onClick={handleVendores}
                    className="px-6 py-4 hover:bg-gray-100 text-left"
                  >
                    Vendores
                  </button>
                )}
                {selectedMenu !== "Riders" && (
                  <button
                    onClick={handleRiders}
                    className="px-6 py-4 hover:bg-gray-100 text-left"
                  >
                    Riders
                  </button>
                )}
                {selectedMenu !== "Customers" && (
                  <button
                    onClick={handleCustomres}
                    className="px-6 py-4 hover:bg-gray-100 text-left"
                  >
                    Customers
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
        {/* Mobile Menu Button */}
        <div className=" md:hidden flex justify-between items-center">
          {/* Logo */}
          <div>
            <img
              src={logo}
              alt="App Logo"
              className="h-8 sm:h-10"
              onClick={handleHome}
            />
          </div>
          <div className="flex gap-2">
            <img src={cart} alt="cart" className="md:hidden text-white " />
            <button
              className="md:hidden text-white bg-[#0c513f] rounded-full p-[16px]"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <IoMenu />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed top-0 left-0 w-full h-full  bg-black z-[1000] overflow-y-auto">
            <div
              className="flex flex-col h-full "
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex justify-end space-x-2 p-4 sticky top-0 w-full ">
                <img src={cart} alt="cart" />
                <MdCancel
                  className="text-white text-5xl cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                />
              </div>
              <nav className="flex-1 overflow-y-auto  px-8 space-y-6 ">
                <p className="border-white/20 border-b-2"></p>
                <Link
                  to="/"
                  className="text-white text-[20px] font-medium hover:text-green-bg
                   border-white/20 border-b-2 hover:bg-[#0c513f] p-4 flex gap-4"
                >
                  <span>
                    <img src={customers} alt="cm" />
                  </span>
                  Customers
                </Link>
                <Link
                  to="/chowpass"
                  className="text-white text-[20px] font-medium hover:text-green-bg 
                  border-white/20 border-b-2 hover:bg-[#0c513f] p-4 flex gap-4"
                >
                  <span>
                    <img src={chowpass} alt="pass" />
                  </span>
                  ChowPass
                </Link>
                <Link
                  to="/relay"
                  className="text-white text-[20px] font-medium hover:text-green-bg 
                  border-white/20 border-b-2 hover:bg-[#0c513f] p-4 flex gap-4"
                >
                  <span>
                    <img src={relayicon} alt="rely" />
                  </span>
                  Relay
                </Link>
                <Link
                  to="/vendores"
                  className="text-white text-[20px] font-medium hover:text-green-bg 
                  border-white/20 border-b-2 hover:bg-[#0c513f] p-4 flex gap-4"
                >
                  <span>
                    <img src={vendores} alt="vs" />
                  </span>
                  Vendores
                </Link>
                <Link
                  to="/riders"
                  className="text-white text-[20px] font-medium hover:text-green-bg 
                  border-white/20 border-b-2 hover:bg-[#0c513f] p-4 flex gap-4"
                >
                  <span>
                    <img src={riders} alt="rs" />
                  </span>
                  Riders
                </Link>
                <Link
                  to="/company"
                  className="text-white text-[20px] font-medium hover:text-green-bg 
                  border-white/20 border-b-2 hover:bg-[#0c513f] p-4 flex gap-4"
                >
                  <span>
                    <img src={company} alt="cm" />
                  </span>
                  Company
                </Link>
                <Link
                  to="/blog/"
                  className="text-white text-[20px] font-medium hover:text-green-bg 
                  border-white/20 border-b-2 hover:bg-[#0c513f] p-4 flex gap-4"
                >
                  <span>
                    <img src={blog} alt="blog" />
                  </span>
                  Blog
                </Link>
                <Link
                  to="/contact"
                  className="text-white text-[20px] font-medium hover:text-green-bg 
                  border-white/20 border-b-2 hover:bg-[#0c513f] p-4 flex gap-4"
                >
                  <span>
                    <img src={contacts} alt="cs" />
                  </span>
                  Contact
                </Link>
                <a
                  href="https://x.com/chowdeck"
                  className="text-white text-[20px] font-medium hover:text-green-bg 
                  border-white/20 border-b-2 hover:bg-[#0c513f] p-4 flex gap-4"
                >
                  <span>
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 0s-.5 10.394-12 12c0 0 9.872.19 12 12 0 0 .678-10.21 12-12 0 0-10.758-1.514-12-12Z"
                        fill="#99C8FF"
                      ></path>
                    </svg>
                  </span>
                  Twitter
                </a>
                <a
                  href="https://www.instagram.com/chowdeck/#"
                  className="text-white text-[20px] font-medium hover:text-green-bg 
                  border-white/20 border-b-2 hover:bg-[#0c513f] p-4 flex gap-4"
                >
                  <span>
                    <img src={instagram} alt="insta" />
                  </span>
                  Instagram
                </a>
              </nav>
              <p className=" text-white/20 text-center text-[14px] py-6">
                {" "}
                © All Rights Reserved. 2022, Chowdeck Logistics Inc.
              </p>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
