import React, { useEffect, useState } from "react";
import { useFaq } from "../Context/FaqContext";
import { useDispatch, useSelector } from "react-redux";
import apiInstance from "../../../utils/axios";
import { apiRoutes } from "../Component/Constants/apiRoutes";
import { createFaq, getAllFaq, removeFromFaq } from "../Redux/Action/action";
import search from "../../assets/svgs/search.svg";
import { IoMdClose } from "react-icons/io";
import plus from "../../assets/svgs/plus.svg";
import mail from "../../assets/svgs/mail.svg";
import contact from "../../assets/svgs/contact.svg";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";

const AllFaq = () => {
  const { allFaq, setAllFaq } = useFaq();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);
  const [question, setQuestion] = useState("");

  const dispatch = useDispatch();
  const faq = useSelector((state) => state.faq);
  const removefaq = useSelector((state) => state.removefaq);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          setError("Unauthorized: Please login first");
          setLoading(false);
          return;
        }
        const response = await apiInstance.get(apiRoutes.GET_ALL_FAQ);
        const faqs = response.data.data;
        setData(faqs);
        setFilteredData(faqs);
        setAllFaq(faqs);
        dispatch(getAllFaq());
      } catch (error) {
        setError(error.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [dispatch]);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setInputValue(value);
    const filtered = data.filter((item) =>
      item.question.toLowerCase().includes(value)
    );
    setFilteredData(filtered);
  };

  const handleSubmit = async () => {
    if (!question.trim()) return;

    try {
      const response = await apiInstance.post(apiRoutes.CREATE_FAQ, {
        question,
      });

      const newFaq = response.data.data;
      const updatedData = [...data, newFaq];
      setData(updatedData);
      setFilteredData(updatedData);
      setAllFaq(updatedData);
      setQuestion("");
      toast.success("Added to faqs..");
    } catch (error) {
      console.log("FAQ creation error:", error.message);
    }
  };

  const handleDelete = (faq) => {
    dispatch(removeFromFaq(faq));
    setAllFaq(faq._id);
    toast.success("Delete from faq..");
  };

  if (error) return <p className="text-white">Error: {error}</p>;
  if (loading) return <p className="text-white">Loading...</p>;

  return (
    <div>
      <p
        className="bg-gradient-to-t from-darkblue to-darkpink text-transparent bg-clip-text
       sm:text-[45px] text-[32px] py-12 text-center font-Vazirmatn-500"
      >
        Frequently Asked Questions
      </p>

      <div className="flex justify-center items-center pb-8 md:px-0 px-4">
        <div className="w-full max-w-lg h-[40px] rounded-[10px] bg-[#292929]">
          <div className="py-[7.5px] px-[8px]">
            <div className="flex gap-[3px] items-center">
              <img src={search} alt="search" />
              <input
                type="search"
                value={inputValue}
                onChange={handleSearch}
                placeholder="Search for a question"
                className="text-[14px] text-white font-Vazirmatn-300 
                  focus:ring-0 focus:outline-none focus:shadow-none
                  w-full h-[19px] opacity-60 bg-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="p-5 w-full max-w-2xl">
          <div className="grid grid-cols-1 gap-4">
            {filteredData.map((item, index) => (
              <div
                key={index}
                className="border border-gray-700 p-4 rounded bg-[#1E1E1E]"
              >
                <div
                  className="flex justify-between cursor-pointer"
                  onClick={() => handleToggle(index)}
                >
                  <p className="text-white text-[16px] font-Vazirmatn-500">
                    {item.question}
                  </p>
                  {activeIndex === index ? (
                    <IoMdClose className="text-white w-5 h-5" />
                  ) : (
                    <img src={plus} alt="expand" />
                  )}
                </div>
                {activeIndex === index && (
                  <div className="flex justify-between items-center">
                    <p className="text-white text-[14px] font-Vazirmatn-400 pt-2">
                      {item.answer || "Answer is not available."}
                    </p>

                    <div>
                      {removefaq && (
                        <div>
                          <MdOutlineDeleteOutline
                            className="text-white"
                            onClick={() => handleDelete(faq)}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center sm:py-10">
        <div className="p-5 w-full max-w-2xl">
          <div className="md:flex items-center gap-5">
            <div className="border border-gray-800 p-5 w-full max-w-sm text-center">
              <img src={mail} alt="email" className="mx-auto" />
              <p className="text-white text-[22px] font-Vazirmatn-600 py-3">
                Email Us
              </p>
              <p className="text-white text-[14px] font-Vazirmatn-400">
                Have questions? Reach out via email. We're here to help!
              </p>
            </div>
            <div className="border border-gray-800 p-5 w-full max-w-sm text-center">
              <img src={contact} alt="contact" className="mx-auto" />
              <p className="text-white text-[22px] font-Vazirmatn-600 py-3">
                Contact Us
              </p>
              <p className="text-white text-[14px] font-Vazirmatn-400">
                Need help or have inquiries? Call us anytime. We're here for
                you.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className=" text-white py-6 sm:px-0 px-2">
          <p>Ask a question:</p>
          <div className="flex items-center gap-4">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="p-2 text-white md:w-sm my-2 rounded-md bg-[#292929] 
              focus:ring-0 focus:outline-none focus:shadow-none "
              placeholder="Enter your question"
            />
            {faq && (
              <div>
                <button
                  onClick={handleSubmit}
                  className=" text-white py-2 px-4 rounded-md bg-[#292929]"
                >
                  Submit
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllFaq;
