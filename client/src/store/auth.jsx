import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [doctors, setDoctors] = useState([]);

  const AuthorizationToken = `Bearer ${token}`;

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);
  };

  // fetfching user data
  const fetchUserData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data.userData);
        setIsLoading(false);
      } else {
        console.log("Error while fetching the data");
        setIsLoading(false);
      }
    } catch (error) {
      console.log("Error in Authentication: ", error);
    }
  };

  // Logic for logout the user
  const LogoutUser = () => {
    setToken(""); // Clear token
    setUser(""); // Clear user data
    localStorage.removeItem("token"); // Remove token from localStorage
  };

  //To Fetch all the Doctors Data
  const getDoctors = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/doctor/doctorsData",
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const data = await response.json();
        // console.log(data);
        setDoctors(data);
      }
    } catch (error) {
      console.log(`Services Frontend Error: ${error}`);
    }
  };

  useEffect(() => {
    if (token) {
      fetchUserData();
    }
    getDoctors();
  }, [token]);
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        LogoutUser,
        storeTokenInLS,
        user,
        AuthorizationToken,
        isLoading,
        doctors
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the provider");
  }
  return authContextValue;
};
