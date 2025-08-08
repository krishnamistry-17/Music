import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isGoogleLogin, setIsGoogleLogin] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [userData, setUserData] = useState(null);
  const [forgotEmail, setForgotEmail] = useState(null);
  const [currentPassword, setCurrentPassword] = useState(null);
  const [newPassword, setNewPassword] = useState("");

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

      const rawUserData = localStorage.getItem("userData");
      if (rawUserData) {
        try {
          setUserData(JSON.parse(rawUserData));
        } catch (err) {
          console.error("Failed to parse userData:", err);
        }
      }
    }
  }, []);

  const login = (token, profile = null, google = false, fullData = null) => {
    console.log("token :", token);

    localStorage.setItem("loginMethod", google ? "google" : "email");

    if (profile) {
      localStorage.setItem("userProfile", JSON.stringify(profile));
      setUserProfile(profile);
    }

    if (fullData) {
      localStorage.setItem("userData", JSON.stringify(fullData));
      setUserData(fullData);
    }

    setIsLoggedIn(true);
    setIsGoogleLogin(google);
  };

  const logout = () => {
    
    localStorage.removeItem("accessToken");
    localStorage.removeItem("loginMethod");
    localStorage.removeItem("userProfile");
    localStorage.removeItem("userData");

    setIsLoggedIn(false);
    setIsGoogleLogin(false);
    setUserProfile(null);
    setUserData(null);
    setForgotEmail(null);
    toast.success("Logout successful");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isGoogleLogin,
        userProfile,
        userData,
        setUserData,
        login,
        logout,
        forgotEmail,
        setForgotEmail,
        currentPassword,
        setCurrentPassword,
        newPassword,
        setNewPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
