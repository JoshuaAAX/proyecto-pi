import { useState, createContext, useContext } from "react";
import { getAllPrograms } from "../api/programa.api";

const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is no Context provider");
  return context;
};

// eslint-disable-next-line react/prop-types
const ContextProvider = ({ children }) => {
  const [profilePicture, setProfilePicture] = useState(null);
  return (
    <authContext.Provider value={{ profilePicture, setProfilePicture }}>
      {children}
    </authContext.Provider>
  );
};

export default ContextProvider;
