import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const loc = useLocation();
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link
              to={"/"}
              style={
                loc.pathname == "/" ? { color: "#1C64F2" } : { color: "6B7280" }
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/about"}
              style={
                loc.pathname == "/about"
                  ? { color: "#1C64F2" }
                  : { color: "6B7280" }
              }
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to={"/calendar"}
              style={
                loc.pathname == "/calendar"
                  ? { color: "#1C64F2" }
                  : { color: "6B7280" }
              }
            >
              Calendar
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
