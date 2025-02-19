import { createContext, useState, useEffect } from "react";
const NavigationContext = createContext();
function NavigationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  useEffect(() => {
    const handlerState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handlerState);
    return () => {
      window.removeEventListener("popstate", handlerState);
    };
  }, []);
  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };
  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}
export { NavigationProvider };
export default NavigationContext;
