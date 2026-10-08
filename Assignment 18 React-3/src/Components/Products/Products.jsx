import { Outlet } from "react-router-dom";

function Products() {
  return (
    <>
      <div>
        <h1>Products</h1>
        <p>Our products will be here.</p>
      </div>

      <Outlet />
    </>
  );
}

export default Products;
