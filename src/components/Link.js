import classNames from "classnames";
import { useContext } from "react";
import NavigationContext from "../context/Navigation";
function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = useContext(NavigationContext);
  const classes = classNames(
    "text-blue-500",
    className,
    currentPath === to && activeClassName
  );
  const handleClick = (e) => {
    console.log(e);
    if (!(e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      navigate(to);
    }
  };
  return (
    <a className={classes} onClick={handleClick} href={to}>
      {children}
    </a>
  );
}
export default Link;
