import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log("isLoggedIn :", isLoggedIn);
  const [userProfile, setUserProfile] = useState(null);
  const [isGoogleLogin, setIsGoogleLogin] = useState(false);
  console.log("isGoogleLogin :", isGoogleLogin);
  const [forgotEmail, setForgotEmail] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const profile = localStorage.getItem("userProfile");
    const loginMethod = localStorage.getItem("loginMethod");

    if (token && loginMethod) {
      setIsLoggedIn(true);
      setIsGoogleLogin(loginMethod === "google");

      if (profile) {
        try {
          setUserProfile(JSON.parse(profile));
        } catch (err) {
          console.error("Failed to parse userProfile:", err);
        }
      }
    } else {
      setIsLoggedIn(false);
      setUserProfile(null);
      setIsGoogleLogin(false);
    }
  }, []);

  const login = (token, profile = null, google = false) => {
    localStorage.setItem("accessToken", token);
    localStorage.setItem("loginMethod", google ? "google" : "email");

    if (profile) {
      localStorage.setItem("userProfile", JSON.stringify(profile));
      setUserProfile(profile);
    }

    setIsLoggedIn(true);
    setIsGoogleLogin(google);
  };

  const logout = () => {
    console.log("Clearing localStorage on logout...");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userProfile");
    localStorage.removeItem("loginMethod");

    setIsLoggedIn(false);
    setUserProfile(null);
    setIsGoogleLogin(false);
    toast.success("Logout successful");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isGoogleLogin,
        forgotEmail,
        setForgotEmail,
        userProfile,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
