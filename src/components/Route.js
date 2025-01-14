import { useContext } from "react";
import NavigationContext from "../context/Navigation";
const Link = ({ path, children }) => {
  const { currentPath } = useContext(NavigationContext);

  if (currentPath === path) return children;
  return null;
};
export default Link;
