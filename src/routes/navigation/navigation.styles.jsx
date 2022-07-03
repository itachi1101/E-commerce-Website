import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as Logo } from "../../Assets/crown.svg";
export default function Navigation() {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
        <div className="links-container">
          <Link className="nav-link" to="/sign-in">
          SIGN-IN 
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
