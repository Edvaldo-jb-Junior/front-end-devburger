import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState();

  const putUserData = (userInfo) => {
    setUserInfo(userInfo);
    localStorage.setItem("devburger:user", JSON.stringify(userInfo));
  };

  return (
    <UserContext.Provider value={{ userInfo, putUserData }}>
      {children}
    </UserContext.Provider>
  );
};