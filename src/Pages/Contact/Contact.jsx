import React, { useState } from "react";
import back from "../../assets/svgs/back.svg";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Contact = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.warn("Please filled all details");
    } else {
      toast.success("Will update u soon..");
    }
  };
  return (
    <div className="py-12 px-6 flex flex-col justify-center items-center ">
      <div className="flex items-center gap-4 lg:hidden mb-6">
        <div>
          <img src={back} alt="back" onClick={() => navigate("/")} />
        </div>
        <div>
          <h2
            className="text-[31px] font-Vazirmatn-700  
                bg-gradient-to-t from-darkblue to-darkpink text-transparent bg-clip-text
                "
          >
            {" "}
            Contact Us
          </h2>
        </div>
      </div>
      <h1
        className="text-[40px]  bg-gradient-to-t from-darkblue to-darkpink text-transparent bg-clip-text lg:block hidden
        font-Vazirmatn-700 mb-6"
      >
        Contact Us
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-[#292929] p-5 my-5 sm:mx-0 mx-3"
      >
        <div className="grid grid-cols-1 gap-4">
          <div className="border border-gray-700 p-4 rounded bg-[#1E1E1E]">
            <div className="flex gap-4 items-center">
              <p className="text-white">Name</p>
              <div>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="text-[14px] text-white font-Vazirmatn-400 w-full h-[21px] focus:ring-0 focus:outline-none focus:shadow-none"
                />
              </div>
            </div>
          </div>

          <div className="border border-gray-700 p-4 rounded bg-[#1E1E1E]">
            <div className="flex gap-4 items-center">
              <p className="text-white">Email</p>
              <div>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-[14px] text-white font-Vazirmatn-400 w-full h-[21px] focus:ring-0 focus:outline-none focus:shadow-none"
                />
              </div>
            </div>
          </div>

          <div className="border border-gray-700 p-4 rounded bg-[#1E1E1E]">
            <div className="flex gap-4 items-center">
              <p className="text-white">Number</p>
              <div>
                <input
                  type="tel"
                  placeholder="Enter Your Mobile Number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="text-[14px] text-white font-Vazirmatn-400 w-full h-[21px] focus:ring-0 focus:outline-none focus:shadow-none"
                />
              </div>
            </div>
          </div>

          <div className="border border-gray-700 p-4 rounded bg-[#1E1E1E]">
            <div className="flex gap-4 items-center">
              <p className="text-white">Message</p>
              <div>
                <input
                  type="text"
                  placeholder="Enter.."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="text-[14px] text-white font-Vazirmatn-400 w-full h-[21px] focus:ring-0 focus:outline-none focus:shadow-none"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center my-2">
            <button
              className="text-white p-2 bg-[#1E1E1E] rounded px-3"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
