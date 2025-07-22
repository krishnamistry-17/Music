import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isGoogleLogin, setIsGoogleLogin] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  // useEffect(() => {
  //   const storedGoogleLogin = localStorage.getItem("isGoogleLogin");
  //   if (storedGoogleLogin === "true") setIsGoogleLogin(true);
  // }, []);

  // useEffect(() => {
  //   const storedLogin = localStorage.getItem("isLoggedIn");
  //   if (storedLogin === "true") setIsLoggedIn(true);
  // }, []);

  useEffect(() => {
    localStorage.setItem("isGoogleLogin", isGoogleLogin);
  }, [isGoogleLogin]);

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  useEffect(() => {
    if (userProfile) {
      localStorage.setItem("userProfile", JSON.stringify(userProfile));
    }
  }, [userProfile]);

  useEffect(() => {
    const storedProfile = localStorage.getItem("userProfile");
    if (storedProfile) {
      setUserProfile(JSON.parse(storedProfile));
      setIsLoggedIn(true);
      setIsGoogleLogin(true);
    }
  }, []);

  const logout = () => {
    setIsLoggedIn(false);
    setIsGoogleLogin(false);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("isGoogleLogin");
    toast.success("Logout Success");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        isGoogleLogin,
        setIsGoogleLogin,
        logout,
        userProfile,
        setUserProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
