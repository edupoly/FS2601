import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="border border-2 m-2 p-2">
      <h1>Hello Main</h1>
      <Link to="/aboutus">Aboutus</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to="/services">Services</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to="/contact">Contactus</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to="/counter">Counter</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to="/products">Products</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to="/recipes">Recipes</Link>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
