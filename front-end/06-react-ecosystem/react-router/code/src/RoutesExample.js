import { BrowserRouter, Link } from "react-router-dom";
import { RoutesApp } from "./routes";

export const RoutesExample = () => {
  return (
    <BrowserRouter>
      <header>
        <nav className="nav-routes">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/asdf">Other</Link>
            </li>
          </ul>
        </nav>
      </header>
      <RoutesApp />
    </BrowserRouter>
  );
};
