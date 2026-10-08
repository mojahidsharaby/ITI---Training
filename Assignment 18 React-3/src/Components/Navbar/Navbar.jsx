import { Link, NavLink, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <Link to="/">React Task</Link>

        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default Navbar;
