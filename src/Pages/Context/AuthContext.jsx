import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [isGoogleLogin, setIsGoogleLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const storedProfile = localStorage.getItem("userProfile");

    if (token) {
      setIsLoggedIn(true);
      if (storedProfile) {
        setUserProfile(JSON.parse(storedProfile));
        setIsGoogleLogin(true);
      }
    } else {
      setIsLoggedIn(false);
      setUserProfile(null);
      setIsGoogleLogin(false);
    }

    setIsAuthChecked(true);
  }, []);

  const login = (token, profile = null, google = false) => {
    localStorage.setItem("accessToken", token);

    if (profile) {
      localStorage.setItem("userProfile", JSON.stringify(profile));
      setUserProfile(profile);
    }

    setIsLoggedIn(true);
    setIsGoogleLogin(google);
  };

  const logout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setUserProfile(null);
    setIsGoogleLogin(false);
    toast.success("Logout successful");
  };

  if (!isAuthChecked) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isGoogleLogin,
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
