import React from "react";
import billie from "../../assets/images/billie.png";
import previous from "../../assets/svgs/previous.svg";
import next from "../../assets/svgs/next.svg";

const Billie = () => {
  return (
    <div>
      <div className=" sm:px-6 px-2 relative">
        <img
          src={billie}
          alt="bile"
          className="sm:h-[260px] h-[215px] rounded-[5px] w-full"
        />

        <div className=" absolute p-[16px] top-4">
          <p className="sm:text-[20px] text-[14px] font-Vazirmatn-600 text-white">
            Billie Eilish
          </p>
          <p className="text-white sm:text-[18px] text-[12px] font-Vazirmatn-300 sm:w-[325px] w-[177px] text-justify sm:pt-4 pt-[4px]">
            You can have easy access to every song of billie eilish by just
            clicking on the <span className="text-darkpink">Listen now</span>{" "}
            botton. You can also <span className="text-darkblue">follow</span>{" "}
            him too for suppurting Her.
          </p>
          <div className="flex items-end justify-between">
            <div>
              <div className="flex sm:pt-4 pt-[8px]">
                <div>
                  <button className="sm:text-[14px] text-[12px] text-darkpink font-Vazirmatn-300 text-center sm:w-[150px] sm:h-[40px] w-[82.5px] h-[34px] rounded-[5px] border-[1px] border-darkpink">
                    Listen Now
                  </button>
                  <button className="sm:text-[14px] text-[12px] text-bluearrow font-Vazirmatn-300 text-center sm:w-[150px] sm:h-[40px] w-[82.5px] h-[34px] rounded-[5px] border-[1px] border-bluearrow ml-[12px]">
                    Follow
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="flex  pl-13">
                <div>
                  <img
                    src={previous}
                    alt="pre"
                    className=" sm:w-[30px] sm:h-[30px] w-[20px] h-[20px]"
                  />
                </div>
                <div className="ml-[9px]">
                  <img
                    src={next}
                    alt="nxt"
                    className="  sm:w-[30px] sm:h-[30px] w-[20px] h-[20px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billie;
