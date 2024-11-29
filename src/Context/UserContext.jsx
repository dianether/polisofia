import React, { createContext, useContext, useEffect, useState } from "react";
import { mode, userMock } from "../Config/config";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  const needUser = () => {
    if (user) {
      return user;
    } else {
      console.log("no hay usuario");
      return null;
    }
  };

  useEffect(() => {
    if (mode === "dev") {
      setUser(userMock);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, needUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser debe usarse dentro de un UserProvider");
  }
  return context;
};
