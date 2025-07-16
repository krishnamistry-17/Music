import React, { useEffect, useRef, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import SignUp from "./SignUp";
import Login from "./Login";

const Platform = ({ tabsectionRef, onLoginSuccess, scrollToTabs }) => {
  const [activeTab, setActiveTab] = useState("signup");

  return (
    <div ref={tabsectionRef}>
      <div className="flex">
        <div className="py-[93px] pr-[115px]">
          <p className="text-white text-[40px] font-Vazirmatn-900">
            Join Our Platform
          </p>
          <p className="text-white text-[20px] font-Vazirmatn-400 text-justify w-[476.5px]">
            You can be one of the <span className="text-darkpink">members</span>{" "}
            of our platform by just adding some necessarily information. if you
            already have an account on our website, you can just hit the{" "}
            <span className="text-darkblue">Login button.</span>
          </p>
        </div>
        <div className="w-[476.5px] rounded-[12px] bg-bgpink">
          <div className="py-[16px] px-[25px]">
            <Tabs>
              <div>
                <TabList className="flex justify-center items-center">
                  <Tab>
                    <button
                      onClick={() => setActiveTab("signup")}
                      className={
                        activeTab === "signup"
                          ? "text-[24px] text-darkpink font-Vazirmatn-700 text-center border-b-[3px] border-darkpink"
                          : "text-[20px] text-lightestpink font-Vazirmatn-600 py-[5px]"
                      }
                    >
                      SignUp
                    </button>
                  </Tab>
                  <Tab className="pl-[16px]">
                    <button
                      onClick={() => setActiveTab("login")}
                      className={
                        activeTab === "login"
                          ? "text-[24px] text-darkpink font-Vazirmatn-700 text-center border-b-[3px] border-darkpink"
                          : "text-[20px] text-lightestpink font-Vazirmatn-600 py-[5px]"
                      }
                    >
                      Login
                    </button>
                  </Tab>
                </TabList>

                {activeTab === "signup" && (
                  <SignUp onSuccess={() => setActiveTab("login")} />
                )}
                {activeTab === "login" && <Login onSuccess={onLoginSuccess} />}
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
